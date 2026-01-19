import { useState } from 'react'
import { useGlobal } from '/src/context/GlobalContext.jsx'

import cn from 'classnames'

import s from './MutualCourses.module.scss'

function MutualCourses() {
  const { state, dispatch } = useGlobal();
  const { PROGRAM_CURRICULUM, courseStatus, SPECIALIZATION } = state;
  
  const courseMap = new Map();
  Object.entries(courseStatus).forEach(([studentName, {core, elective, specialization: spec}]) => {
    Object.entries({...core, ...elective, ...spec}).forEach(([courseName, status]) => {
      if(!['notTaken', 'inLoad'].includes(status)) return;
      if(!courseMap.has(courseName)){
        courseMap.set(courseName, []);
      }
      courseMap.get(courseName).push(studentName);
    });
  });

  const groupedByStudents = [];
  courseMap.forEach((students, course) => {    
    const group = groupedByStudents.find(g => g.names.toString() === students.toString());
    if(group){
      group.courses.push(course);
    }
    else{
      groupedByStudents.push({ names: students, courses: [course] });
    }
  })

  const mutualCourses = groupedByStudents.filter(({names}) => names.length > 1).sort((a, b) => a.names.length - b.names.length);
  const allSpec = Object.keys(SPECIALIZATION).reduce((acc, key) => {
    return { ...acc, ...SPECIALIZATION[key] };
  }, {});

  const getCourseTitle = (courses) => {
    return Object.entries(courses).reduce((acc, [courseName, courseInfo]) => {
      acc[courseName] = courseInfo[3];
      return acc;
    }, {});
  };
  const {core, elective} = PROGRAM_CURRICULUM.IT;
  const courseTitle = getCourseTitle({...core, ...elective, ...allSpec});

  return (
    <div className={cn(s.mutualCourses)}>
      <h1>Mutual Courses</h1>
      {mutualCourses.length !== 0 ?
        <ul>{mutualCourses.map(({ names, courses }, i) => (
          <li key={`mutualCourses-${i}`}>
            <div className={s.names}>
              <span>{names.join(', ')}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, i) => {
                  const currType = (core && course in core) ? 'core' : (elective && course in elective)? 'elective' : 'specialization';
                  
                  return <tr key={i} className={cn(s[currType], {[s.inLoad]: names.every((name) => courseStatus[name][currType][course] === 'inLoad')})}>
                    <td>{course}</td>
                    <td>{courseTitle[course]}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </li>
        ))}</ul> :
        <p>No mutual courses available.</p>
      }
    </div>
  )
}

export default MutualCourses