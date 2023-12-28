import React, { useContext } from 'react'
import DataContext from '../../context/datacontext';


export default function PageLeftSide() {
  const {data} = useContext(DataContext)

  const { resDays } = data;
    
  return (
    <div>
        <span className='w-24 relative top-10 font-medium text-lg h-8 ml-20 mt-10'>
            the.weather
        </span>
        <div className='absolute bottom-44 max-w-[450px] ml-20 font-bold max-md:flex-col max-md:items-center flex items-end'>
          <div className='mr-2 text-9xl font-normal'>
            {resDays?.current?.temp_c}
            {resDays?.current?.temp_c && <span>°</span>}
          </div>
          <div>
            <div className='flex flex-col text-5xl font-light'>
              {resDays?.location?.name}
            </div>
            <div className='flex flex-col text-lg font-light'>
              {resDays?.location?.localtime}
            </div>
          </div>
          <div className='flex flex-col max-md:ml-0 ml-6 items-center'>
            <img className='w-10' src={resDays?.current?.condition?.icon} alt=""/>
            <div className='flex flex-col text-lg font-normal'>
              {resDays?.current?.condition?.text} 
            </div>
          </div>
        </div>
    </div>
  )
}
