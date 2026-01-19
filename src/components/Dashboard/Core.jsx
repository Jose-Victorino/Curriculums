import { useState } from 'react'
import { useGlobal } from '/src/context/GlobalContext'

import Term from './Term'

import s from './Core.module.scss'
import cn from 'classnames';

function Core() {
  const { state } = useGlobal();

  const { core, program, defaultYear } = state.selectedStudent;
  const maxYear = state.PROGRAM_CURRICULUM.getMaxYears(program);
  const terms = state.PROGRAM_CURRICULUM.getMaxTerms(program);

  const [selectedYear, setSelectedYear] = useState(defaultYear);
  
  return (
    <article className={s.curr}>
      {/* <CarouselContainer {...{
        pagination: 'numbers'
      }}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>7</Card>
      </CarouselContainer> */}
      <div className={s.yearList}>
        <p>Year</p>
        {[...Array(maxYear)].map((_, i) => {
          const current = i + 1;

          let number
          if(current === 1)
            number = `${current}st`;
          else if(current === 2)
            number = `${current}nd`;
          else if(current === 3)
            number = `${current}rd`;
          else
            number = `${current}th`;
          
          return <button onClick={() => setSelectedYear(current)} className={cn({[s.selected]: selectedYear === current})} key={i}>{number}</button>
        })}
      </div>
      {[...Array(terms[selectedYear - 1])].map((_,i) => {
        const courses = Object.entries(core).filter(([_, val]) => {
          if(val[0] === selectedYear && val[1] === i + 1) return val;
        });

        return (
          <div key={i}>
            <p style={{marginBottom: '4px'}}>Term {i + 1}</p>
            <Term courses={courses}/>
          </div>
        )
      })}
    </article>
  )
}

export default Core