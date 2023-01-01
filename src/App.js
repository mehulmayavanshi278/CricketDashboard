import { createContext, useState } from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./components/Home";
export const datacontext = createContext();

function App() {
  const [playerdata , setPlayerdata] = useState();
  const [playerlist , setPlayerlist]=useState();
  const [serieslist , setSerieslist] = useState();
  const [countrylist , setCountrylist] = useState();
  const [isshowmiddle2 , setIsshowmiddle2] = useState(false);
  const [isshowmiddle3 , setIsshowmiddle3] = useState(false);
  return (
   <>
   <datacontext.Provider  value={{playerdata , setPlayerdata , playerlist , setPlayerlist , 
                                    serieslist , setSerieslist , isshowmiddle2 , setIsshowmiddle2 , 
                                    isshowmiddle3 , setIsshowmiddle3 , countrylist , setCountrylist}}>
   <Routes>
     <Route exact path="/" element = {<Home/>} />
   </Routes>
   </datacontext.Provider>

   </>
  );
}

export default App;
