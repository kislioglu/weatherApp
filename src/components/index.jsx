import PageRightSide from "./rightside"
import PageLeftSide from "./leftside"
import DataContext from "../context/datacontext";
import { useContext } from "react";
import classnames from "tailwindcss-classnames";


export default function MainPage() {

  const {data} = useContext(DataContext)

  const { resDays } = data;
  
  const getBackgroundColorClass = () => {
    const conditionText = resDays?.current?.condition?.text?.toLowerCase();
    if (conditionText === ('sunny')) {
      return 'bg-sunny';
    }
  };


  return (
    <div className={classnames('w-full h-full bg-gray-400 absolute',getBackgroundColorClass())}>
      
          <div className="absolute left-0 w-[60%] h-full ">
            <PageLeftSide/>
          </div>
          <div className="absolute backdrop-blur-md bg-white/30 right-0 w-[40%] h-full">
            <PageRightSide/>
          </div>
          
    </div>  
  )
}
