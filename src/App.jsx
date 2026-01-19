import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useGlobal } from '/src/context/GlobalContext'

import CrestIcon from '/src/assets/image/Crest-Icon.png'
import s from './App.module.scss'

import SideNav from '/src/components/SideNav/SideNav.jsx'
import { evaluateCourses } from '/src/components/Util/util.jsx'

function App() {
  const { state, dispatch } = useGlobal();

  useEffect(() => {
    evaluateCourses(state, dispatch);
  }, []);
  
  const handleClick = () => {
    
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.Burger_Cont}>
          <button className={`${s.Nav_Burger}`} onClick={handleClick}>
            <div className={`${s.Bar} ${s.Bar_Top}`}></div>
            <div className={`${s.Bar} ${s.Bar_Mid}`}></div>
            <div className={`${s.Bar} ${s.Bar_Bot}`}></div>
          </button>
        </div>
        <img src={CrestIcon} alt="logo"/>
      </header>
      <main className={s.main}>
        <SideNav />
        <Outlet />
      </main>
    </>
  )
}

export default App