import PageRightSide from "./rightside"
import PageLeftSide from "./leftside"
import { useContext, useEffect } from "react"
import DataContext from "../context/datacontext"


export default function MainPage() {

    const {fetchData} = useContext(DataContext)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(e.target.city.value)
    }


  return (
    <div className="flex relative w-full h-full overflow-hidden">
      <form className="w-full h-full" onSubmit={handleSubmit}>
          <div className="absolute left-0 w-[60%] h-full bg-gray-500">
            <PageLeftSide/>
          </div>
          <div className="absolute right-0 w-[40%] h-full">
              <div className="flex flex-1 items-center mt-10">
              <p className="mx-3">Search a city</p>
              <input name="city" className="text-black p-1 ml-2 rounded-md"/>   
            </div>
          </div>          
      </form>
    </div>  
  )
}
