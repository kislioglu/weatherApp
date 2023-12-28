import React, { useContext} from "react"
import DataContext from "../../context/datacontext"

export default  function PageRightSide() {

  const {data} = useContext(DataContext)

  const { resDays } = data;

  const {fetchData} = useContext(DataContext)
    
  const handleSubmit = (e) => {
      e.preventDefault();
      fetchData(e.target.city.value)
  }
  console.log(resDays)

  return (
    <div className="ml-10 w-[80%]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-1 items-center mt-10">
          <input name="city" placeholder="Search a city" className="w-full focus:placeholder-opacity-0 focus:outline-none focus:capitalize placeholder-black txt-black bg-transparent rounded-none border-b brd-black pb-1"/>   
        </div>
      </form>

      {
        resDays?.location?.name && (
        <div>
          <div name="city" className='mt-8 txt-black  flex flex-col text-base'>
            {resDays?.location?.name}
          </div>

          <div className="my-8 border-b brd-black"></div>
          
          <h3 className="txt-black text-lg font-medium mb-8">Weather Details</h3>

          <div className="flex flex-col gap-6 txt-black">
            <div className="flex justify-between">
              <span>Humidity</span>
              <div>{resDays?.current?.humidity + "%"}</div>
            </div>
            <div className="flex justify-between">
              <span>Cloud</span>
              <div>{resDays?.current?.cloud + "%"}</div>
            </div>
            <div className="flex justify-between">
              <span>Wind</span>
              <div>{resDays?.current?.gust_kph + "%"}</div>
            </div>
            <div className="flex justify-between">
              <span>Feelslike</span>
              <div>
                {resDays?.current?.feelslike_c}
                {resDays?.current?.feelslike_c && <span>°</span>}
              </div>
            </div>
          </div>
          <div className="my-8 border-b brd-black"></div>

          <div className="flex flex-col gap-5 txt-black">
          <h3 className="txt-black text-lg font-medium ">Next Days</h3>
            {
            resDays?.forecast?.forecastday.map(eachDay => 
              <li className="flex items-center justify-between">
                
                <div className='text-lg font-light'>
                  {eachDay.date}
                </div>
                
                <div className="flex items-center">
                  
                  <div className="w-24 flex items-center">
                    <div className='text-lg font-light'>
                      {eachDay.day.condition.text} 
                    </div>
                    <img className='w-10' src={eachDay.day.condition.icon} alt=""/>
                  </div>
                  
                  <div className="flex w-24 gap-2">
                    <div className=' text-lg font-light'>
                      {eachDay.day.maxtemp_c}
                      {<span>°</span>}
                    </div>
                    <span> | </span>
                    <div className=' text-lg font-light'>
                      {eachDay.day.mintemp_c}
                      {<span>°</span>}
                    </div>
                  </div>
                </div>
              </li>) 
            }
          </div>

        </div>
      )}

      
    </div>
    
  )
}