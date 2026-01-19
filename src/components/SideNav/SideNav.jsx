import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import s from './SideNav.module.scss'
import { useGlobal } from '/src/context/GlobalContext'

function SideNav() {
  const { state } = useGlobal();
  const { STUDENT_INFORMATION } = state;

  return (
    <nav className={`${s.nav}`}>
      <div>
        <NavLink
          to='Mutual-Courses'
          className={({isActive}) => cn(s.nav_item, { [s.active] : isActive })}
        >
          <button>View Mutual Courses</button>
        </NavLink>
      </div>
      <div className={s.desc}>
        <p>Curriculums</p>
      </div>
      <ul>
        {Object.entries(STUDENT_INFORMATION).map(([name]) => 
          <li key={name}>
            <NavLink
              to={`c/${name.split(' ').join('-')}`}
              className={({isActive}) => cn(s.nav_item, { [s.active] : isActive })}
            >
              <button>{name}</button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default SideNav