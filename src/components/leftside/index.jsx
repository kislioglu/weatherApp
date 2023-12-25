import React, { useContext } from 'react'
import classNames from 'tailwindcss-classnames';
import DataContext from '../../context/datacontext';


export default function PageLeftSide() {
  const {data} = useContext(DataContext)


  
  const { current, location } = data;
  
  const getBackgroundColorClass = () => {
    const conditionText = current?.condition?.text?.toLowerCase();
    if (conditionText === ('mist')) {
      return 'bg-sunny';
    }
  };

  console.log(data)
  
  return (
    <div className={classNames('w-full h-full bg-gray-500 absolute',getBackgroundColorClass())}>
        <div className='w-24 h-8 ml-20 mt-10'>
            the.weather
        </div>
        <div className='absolute bottom-44 max-w-[400px] ml-20 font-bold max-md:flex-col max-md:items-center flex items-end'>
          <div className='mr-2 text-9xl font-normal'>
            {current?.feelslike_c}
            {current?.feelslike_c && <span>°</span>}
          </div>
          <div>
            <div className='flex flex-col text-3xl font-light'>
              {location?.name}
            </div>
            <div className='flex flex-col text-lg font-light'>
              {location?.localtime}
            </div>
          </div>
          <div className='flex flex-col max-md:ml-0 ml-6 items-center'>
            <img className='w-10' src={current?.condition?.icon} alt=""/>
            <div className='flex flex-col text-lg font-light'>
              {current?.condition?.text} 
            </div>
          </div>
        </div>
    </div>
  )
}
