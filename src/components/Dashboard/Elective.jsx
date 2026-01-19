import React from 'react'
import { useGlobal } from '/src/context/GlobalContext'

import s from './Core.module.scss'
import Term from './Term'

function Elective() {
  const { state } = useGlobal();
  const { elective } = state.selectedStudent;

  return (
    <article className={s.curr}>
      <p>Year 3 Term 3</p>
      <Term courses={Object.entries(elective)}/>
    </article>
  )
}

export default Elective