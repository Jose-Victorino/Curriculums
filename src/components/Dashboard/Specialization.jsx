import React from 'react'
import { useGlobal } from '/src/context/GlobalContext'

import s from './Core.module.scss'
import Term from './Term'

function Specialization() {
  const { state } = useGlobal();
  const { specialization } = state.selectedStudent;

  return (
    <article className={s.curr}>
      <Term courses={Object.entries(specialization)}/>
    </article>
  )
}

export default Specialization