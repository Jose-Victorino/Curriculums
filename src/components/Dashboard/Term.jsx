import React from 'react'
import { useGlobal } from '/src/context/GlobalContext'

import s from './Term.module.scss'
import cn from 'classnames'

function Term(props) {
  const { courses } = props;

  const { state } = useGlobal();

  const { name } = state.selectedStudent;

  const { core, elective, specialization } = state.courseStatus[name];
  const statuses = { ...core, ...elective, ...specialization};

  const totals = courses.reduce(
    (acc, [, table]) => {
      acc.lec += Number(table[4]) || 0
      acc.lab += Number(table[5]) || 0
      acc.units += Number(table[6]) || 0
      return acc
    },
    { lec: 0, lab: 0, units: 0 }
  )

  return (
    <div className={cn(s.tableCont)}>
      <table className={s.termTable}>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Lec Hrs</th>
            <th>Lab Hrs</th>
            <th>Credit Units</th>
            <th>Pre-Requisites</th>
            <th>Co-Requisites</th>
            <th>Paired Courses</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(([course, [,, code, title, lec, lab, units, pre, co, paired]]) => (
            <tr key={course} className={s[statuses[course]]}>
              <td>{code}</td>
              <td>{title}</td>
              <td>{lec}</td>
              <td>{lab}</td>
              <td>{units}</td>
              <td>{pre}</td>
              <td>{co}</td>
              <td>{paired}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td style={{textAlign: "center"}}>TOTAL</td>
            <td>{totals.lec}</td>
            <td>{totals.lab}</td>
            <td>{totals.units}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Term