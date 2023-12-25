import React, { useContext} from "react"
import DataContext from "../../context/datacontext"

function PageRightSide() {

  const {setCity} = useContext(DataContext)


  return (
    <div>
        
    </div>
  )
}

export default React.memo(PageRightSide)