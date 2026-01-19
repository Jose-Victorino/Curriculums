import { ACTIONS } from '/src/context/GlobalContext'

const setStatus = (courseName, preReqs, status, year, isGraduating) => {
  if(preReqs === '') return status[courseName];
  
  const verdict = courseName === "SGE100X" ? year !== 3
    : courseName === "ITS198F" ? isGraduating
      : preReqs.split(', ').some((preReq) => status[preReq] !== 'taken')

  if(verdict){
    if(status[courseName] === 'inLoad') return status[courseName];
    return 'preReq';
  }
  if(status[courseName] === 'preReq') return 'notTaken';
  return status[courseName];
};

export function evaluateCourses(state, dispatch) {  
  const { PROGRAM_CURRICULUM, SPECIALIZATION, courseStatus, STUDENT_INFORMATION } = state;
  const updatedStatus = JSON.parse(JSON.stringify(courseStatus));

  Object.entries(updatedStatus).forEach(([name, currs]) => {
    if(typeof currs !== 'object') return;
    
    const { program, defaultYear, specialization: spec, isGraduating } = STUDENT_INFORMATION[name];
    const studentStatus = {...updatedStatus[name].core, ...updatedStatus[name].elective, ...updatedStatus[name].specialization};
    
    const coursePreRequisites = Object.entries({...PROGRAM_CURRICULUM[program].core, ...PROGRAM_CURRICULUM[program].elective, ...SPECIALIZATION[spec]}).reduce((acc, [courseName, courseInfo]) => {
      acc[courseName] = courseInfo[7];
      return acc;
    }, {})

    Object.entries(currs).forEach(([currType, courses]) => {
      Object.keys(courses).forEach((courseName) => {
        updatedStatus[name][currType][courseName] = setStatus(courseName, coursePreRequisites[courseName], studentStatus, defaultYear, isGraduating);
      });
    });
  });

  dispatch({ type: ACTIONS.SET_PREREQUISITE_STATUS, payload: updatedStatus })
}