import { useState, useMemo } from 'react'
import { useGlobal } from '/src/context/GlobalContext'

import Modal from '/src/components/Util/Modal'
import s from './EditModal.module.scss'

import { evaluateCourses } from '/src/components/Util/util.jsx'
import Button from '/src/components/Util/Button.jsx'
import { capitalizeFirstLetter, isEmptyObject } from '/src/components/Util/Util.js'

function EditModal({onClose}) {
  const { state, dispatch } = useGlobal();
  const { name, unitsPassed, unitsLeft, eleUnitsTaken } = state.selectedStudent;

  const courseStatus = state.courseStatus[name];

  const currTypes = ['core', 'elective', 'specialization'];

  const filterCourses = (filter) => (
    currTypes.reduce((acc1, curr) => {
      const courses = Object.values(state.selectedStudent[curr]).reduce((acc2, [,, code, title,,, units]) => {
        const status = courseStatus[curr][code];
        if(filter.includes(status)) acc2[code] = { title, status, units };
        return acc2;
      }, {});
      return { ...acc1, [curr]: courses }
    }, {})
  );

  const [toggleModal, setToggleModal] = useState(false);
  const [filtered, setFiltered] = useState(filterCourses(['notTaken', 'inLoad']));
  const [preReqCourse, setPreReqCourse] = useState(filterCourses(['preReq']));
  
  const onChangeBypass = (code, curr) => (e) => {
    setPreReqCourse((prev) => ({...prev,
      [curr]: {...prev[curr],
        [code]: {...prev[curr][code],
          status: (e.target.checked) ? 'inLoad' : 'preReq'
        }
      }
    }))
  };

  const groupByCurr = (t, s) => (
    currTypes.reduce((acc, curr) => ({
      ...acc,
      [curr]: { ...t[curr], ...s[curr] }
    }), {})
  );
  
  const submitBypass = () => {
    const allSelected = Object.entries(preReqCourse).reduce((acc, [curr, courses]) => {
      if(isEmptyObject(courses)) return acc;
      
      return { ...acc, [curr]: Object.fromEntries(Object.entries(courses).filter(([_, {status}]) => status === 'inLoad')) }
    }, {});
    
    setFiltered((prev) => groupByCurr(prev, allSelected));
    
    setToggleModal(false);
  };
  
  const BypassModal = () => {
    return (
      <Modal
        width='420px'
        onClose={() => setToggleModal(false)}
        title="Select a course to take"
      >
        <div style={{padding: '15px'}}>
          <Button
            btnType='secondary'
            text='Submit'
            onClick={() => submitBypass()}
          />
          <table className={s.preReqCourses}>
            <thead>
              <tr>
                <th></th>
                <th>Code</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(preReqCourse).map(([curr, courses]) =>
                Object.entries(courses).map(([code, { title, status }]) =>
                  <tr key={code}>
                    <td><input type="checkbox" name={code} checked={status === 'inLoad'} onChange={onChangeBypass(code, curr)} /></td>
                    <td>{code}</td>
                    <td>{title}</td>
                  </tr>
                )
              )}
            </tbody>
          </table> 
        </div>
      </Modal>
    )
  };

  const getUnitsChecked = useMemo(() => {
    let totalUnits = 0;
    
    Object.values({...filtered.core, ...filtered.elective, ...filtered.specialization}).forEach(({status, units}) => {
      if(['inLoad', 'taken'].includes(status))
        totalUnits += units;
    });

    return totalUnits;
  }, [filtered]);
  
  const onChangeInput = (curr, code, status, inputType) => {
    setFiltered((prev) => ({...prev,
      [curr]: {...prev[curr],
        [code]: {...prev[curr][code],
          status: (inputType === status) ? 'notTaken' : inputType,
        }
      }
    }))
  };

  const getStatus = (currName) => Object.entries(currName).reduce((acc, [key, {status}]) => ({ ...acc, [key]: status }), {});
    
  const submit = () => {
    const updates = Object.fromEntries(currTypes.map((curr) => ([curr, getStatus(filtered[curr])])));
    
    const updatedState = {
      ...state,
      courseStatus: {
        ...state.courseStatus,
        [name]: groupByCurr(state.courseStatus[name], updates)
      }
    };

    evaluateCourses(updatedState, dispatch);
    onClose(true);
  };

  const RenderTable = ({curr, courses}) => (
    <section>
      <h3 className={s.title}>{capitalizeFirstLetter(curr)}</h3>
      <table className={s.termTable}>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Taken</th>
            <th>In Load</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(courses).map(([code, {title, status}]) => (
            <tr key={code} className={s[status]}>
              <td>{code}</td>
              <td>{title}</td>
              <td>
                <label htmlFor={`${code}-taken`}>
                  <input type="checkbox" id={`${code}-taken`} checked={status === 'taken'} onChange={() => onChangeInput(curr, code, status, 'taken')}/>
                </label>
              </td>
              <td>
                <label htmlFor={`${code}-inLoad`}>
                  <input type="checkbox" id={`${code}-inLoad`} checked={status === 'inLoad'} onChange={() => onChangeInput(curr, code, status, 'inLoad')}/>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <Modal height='75vh' onClose={onClose}>
      <article className={s.modal}>
        <section>
          <ul>
            <li>units checked: <b>{getUnitsChecked}</b></li>
            <li>Projected units left: <b>{unitsLeft - getUnitsChecked}</b></li>
            <li>Projected units passed: <b>{unitsPassed + getUnitsChecked}</b></li>
          </ul>
          <div className={s.btnCont}>
            <Button
              btnType='secondary'
              text='Advance course'
              onClick={() => setToggleModal(true)}
            />
            <Button
              btnType='primary'
              text='Submit'
              onClick={() => submit()}
            />
          </div>
        </section>
        {Object.entries(filtered).map(([curr, courses]) => (
          <RenderTable key={curr} curr={curr} courses={courses} />
        ))}
        {toggleModal && <BypassModal />}
      </article>
    </Modal>
  )
}

export default EditModal