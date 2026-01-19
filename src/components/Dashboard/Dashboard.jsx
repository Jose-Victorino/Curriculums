import { useState, useEffect, useMemo } from 'react'
import { useParams, NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import { useGlobal, ACTIONS } from '/src/context/GlobalContext'

import editStatusImg from '/src/assets/image/svg/pen-to-square.svg'

import Core from './Core'
import Elective from './Elective'
import Specialization from './Specialization'
import EditModal from './EditModal'

import s from './Dashboard.module.scss'

function Dashboard() {
  const { name } = useParams();
  const { state, dispatch } = useGlobal();
  const { PROGRAM_CURRICULUM, STUDENT_INFORMATION, SPECIALIZATION, courseStatus } = state;
  
  const studentName = name.replace('-', ' ');
  const nameList = Object.keys(STUDENT_INFORMATION);

  if(!nameList.includes(studentName)) return <>Student Not Found</>;
  
  const [currentView, setCurrentView] = useState("Core");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { displayName, program, defaultYear, curriculumYear, specialization: studentSpec, unitsRequired, defaultUnitsPassed } = STUDENT_INFORMATION[studentName];

  const currTypes = ['core', 'elective', 'specialization'];
  
  const [unitsCredited, eleUnitsTaken] = useMemo(() => {
    const curriculum = PROGRAM_CURRICULUM[program];
    let totalUnits = 0;
    let electiveUnits = 0;
    
    const allTaken = currTypes.reduce((acc, curr) => ({
      ...acc,
      [curr]: Object.entries(courseStatus[studentName][curr]).reduce((acc, [course, status]) => {
        if(status === 'taken') 
          acc.push(course)
        return acc;
      }, []),
    }), {});
    
    for(const course of allTaken.core){
      const courseData = curriculum.core[course];
      if(courseData) totalUnits += Number(courseData[6]) || 0;
    }

    for(const course of allTaken.elective){
      const courseData = curriculum.elective[course];
      if(courseData) {
        totalUnits += Number(courseData[6]) || 0;
        electiveUnits += Number(courseData[6]) || 0;
      }
    }
    
    for(const course of allTaken.specialization){
      const courseData = SPECIALIZATION[studentSpec][course];
      if(courseData) totalUnits += Number(courseData[6]) || 0;
    }

    return [totalUnits, electiveUnits];
  }, [courseStatus[studentName]]);

  const unitsPassed = unitsCredited + defaultUnitsPassed;
  const unitsLeft = unitsRequired - unitsCredited;

  const selectedCurriculum = useMemo(() => ({
    name: studentName,
    ...STUDENT_INFORMATION[studentName],
    ...PROGRAM_CURRICULUM[program],
    specialization: SPECIALIZATION[studentSpec] || {},
    unitsPassed,
    unitsLeft,
    eleUnitsTaken, 
  }), [studentName]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_SELECTED_STUDENT,
      payload: selectedCurriculum
    });

    setIsLoading(false);
  }, [studentName]);

  if(isLoading) return <div>Loading...</div>;

  const onclose = (submitted = false) => {
    if(submitted)
      navigate('/Mutual-Courses');
    else
      navigate(`/c/${name}`);
  };
  
  return (
    <div className={s.mainWrapper}>
      <section className={s.studentInformation}>
        <div className={s.studentName}>
          <h1>{displayName} Curriculum</h1>
          <NavLink to='edit'>
            <button>
              <img src={editStatusImg} alt="edit status" />
            </button>
          </NavLink>
        </div>
        <div className={s.infos}>
          <ul className={s.basicInfo}>
            <li><p>Program: <b>{program}</b></p></li>
            <li><p>Year Level: <b>{defaultYear}</b></p></li>
            <li><p>Curriculum Year: <b>{curriculumYear}</b></p></li>
            <li><p>Specialization: <b>{studentSpec}</b></p></li>
          </ul>
          <ul className={s.units}>
            <li><p>Required: <b>{unitsRequired}</b></p></li>
            <li><p>Credited: <b>{unitsCredited}</b></p></li>
            <li><p>Passed: <b>{unitsPassed}</b></p></li>
            <li><p>Left: <b>{unitsLeft}</b></p></li>
          </ul>
        </div>
      </section>
      <section className={s.currSection}>
        <div className={s.tabNav}>
          <ul className={s.tabBtnList}>
            <li>
              <button className={currentView === 'Core' ? s.selected : ''} onClick={() => setCurrentView('Core')}>Core Courses</button>
            </li>
            <li>
              <button className={currentView === 'Elective' ? s.selected : ''} onClick={() => setCurrentView('Elective')}>Electives</button>
            </li>
            <li>
              <button className={currentView === 'Specialization' ? s.selected : ''} onClick={() => setCurrentView('Specialization')}>Specialization</button>
            </li>
          </ul>
          <div className={s.legend}>
            <b>Legend:</b>
            <ul>
              <li>
                <div className={s.inLoad}></div>
                <p>in Load</p>
              </li>
              <li>
                <div className={s.taken}></div>
                <p>Taken</p>
              </li>
              <li>
                <div className={s.notTaken}></div>
                <p>Not Taken</p>
              </li>
              <li>
                <div className={s.preReq}></div>
                <p>Pre-requisite Needed</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.currDisplay}>
          {currentView === 'Core' &&
            <Core />
          }
          {currentView === 'Elective' &&
            <Elective />
          }
          {currentView === 'Specialization' && 
            <Specialization />
          }
        </div>
      </section>
      <Routes>
        <Route path='edit' element={<EditModal onClose={onclose}/>}/>
      </Routes>
    </div>
  )
}

export default Dashboard