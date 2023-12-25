import { createContext, useState } from "react";

const DataContext = createContext();


 export const DataProvider = ({children}) => {


    const [data, setData] = useState({})
    const baseUrl = "http://api.weatherapi.com/v1/"

    const fetchData = async function(city) {
        let res =  await fetch(baseUrl + `current.json?key=7456bbcf39164b58bce125218231312&q=${city}`)
        res = await res.json()
        setData(res)
        
    }
    
    return <DataContext.Provider value={{data,fetchData}}>{children}</DataContext.Provider>
 }
 

 export default DataContext;