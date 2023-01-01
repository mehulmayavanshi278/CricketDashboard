import axios from "axios";
import React, { useContext, useEffect } from "react";
import { datacontext } from "../App";

function Home() {


  const getme = async (id) => {
    console.log(id);
  };

  const {
    playerdata,
    setPlayerdata,
    playerlist,
    setPlayerlist,
    serieslist,
    setSerieslist,
    isshowmiddle2,
    setIsshowmiddle2,
    countrylist , setCountrylist , 
    isshowmiddle3 , setIsshowmiddle3,
  } = useContext(datacontext); 


  const getPlayerData = async (id) => {
    console.log(id)
   
    try {
      const res = await axios.get(
        `https://api.cricapi.com/v1/players_info?apikey=1dec927c-fa36-4667-a59f-58b9ce0627ca&id=${id}`,
        {}
      );
      if (res) {
        console.log(res.data);
        setIsshowmiddle2(false)
        setIsshowmiddle3(false)
        setPlayerdata(res.data.data);
        // isshowmiddle2(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getPlayerList = async () => {
    try {
      const res = await axios.get(
        "https://api.cricapi.com/v1/players?apikey=1dec927c-fa36-4667-a59f-58b9ce0627ca&offset=0"
      );
      if (res) {
        console.log(res.data.data);
        setPlayerlist(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getSeriesListData = async () => {
    try {
      const res = await axios.get(
        "https://api.cricapi.com/v1/series?apikey=1dec927c-fa36-4667-a59f-58b9ce0627ca&offset=0"
      );
      if (res) {
        // console.log(res.data.data);
        setSerieslist(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getCountrylist =async()=>{
    try{
     const res = await axios.get("https://api.cricapi.com/v1/countries?apikey=1dec927c-fa36-4667-a59f-58b9ce0627ca&offset=0");
     if(res){
      console.log(res.data.data);
      setCountrylist(res.data.data);
     }
    }catch(err){
      console.log(err);
    }
  }
  const setChanges = ()=>{
    console.log("hi")
    setIsshowmiddle2(true)
    setIsshowmiddle3(false);
  }

  useEffect(() => {
    // getPlayerData();
    getPlayerList();
    getSeriesListData();
    getCountrylist();

  }, []);
  return (
    
    <>
      <div className="main">
        <div className="sideBar">
          <div className="title">
            <div className="h4 text-white">
              {" "}
              <b>Dash </b>
            </div>
          </div>

          <nav>
            <div className="h4  text-white" style={{ padding: "0 5vh" }}>
              {" "}
              select {" "}
            </div>
            <ul className="p-0">
              <li onClick={setChanges}>Series list</li>
              <li onClick={()=>{setIsshowmiddle3(true)}}>   countrylist </li>
        
            </ul>
          </nav>
        </div>
        <div className="containerr">
          <div className="navbar d-flex justify-content-between px-5">
            <div className="h4">
              <b>Dashboard</b>
            </div>
            <select
              name="name"
              style={{
                backgroundColor: "rgb(26, 26, 113)",
                color: "white",
                padding: "5px 0",
              }}
              onChange={(e)=>{getPlayerData(e.target.value)}}
               >
              {playerlist &&
                playerlist.map((elm, id) => {
                  return (
                    <>
                      <option value={elm.id} >
                        {elm.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>


  { !isshowmiddle2 && !isshowmiddle3 && <div className="middleContainer">
            <div className="first">
              <img src="./images/cricket.jpg" alt="" />
              <div className="first1">
                <div className=" h1"> {playerdata && playerdata.name} </div>
                <div className=" h5">
                  Role :
                  <span className="h6"> {playerdata && playerdata.role} </span>
                </div>
                <div className=" h5">
                  DOB :{" "}
                  <span className="h6">
                    {" "}
                    {playerdata && playerdata.dateOfBirth}{" "}
                  </span>
                </div>
                <div className=" h5">
                  place of birth :{" "}
                  <span className="h6">
                    {" "}
                    {playerdata && playerdata.placeOfBirth}{" "}
                  </span>
                </div>
              </div>
              <div className="first2">
                <div className=" h5">
                  battingStyle :{" "}
                  <span className="h6">
                    {" "}
                    {playerdata && playerdata.battingStyle}{" "}
                  </span>
                </div>
                <div className=" h5">
                  bowllingStyle :{" "}
                  <span className="h6">
                    {" "}
                    {playerdata && playerdata.bowlingStyle}{" "}
                  </span>
                </div>
              </div>
              <div className="first3">
                <img
                  className="w-100"
                  src={playerdata && playerdata.playerImg}
                  alt=""
                />
              </div>
            </div>
            <div className="second">
              <div className="h6">PLAYER CWC STATISTICS</div>
              <div className="data d-flex justify-content-around">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <div className="h6 mt-2">Batting and Fielding Stats</div>
              <table class="table table-dark">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    {/* {playerdata.stats &&
                      playerdata.stats.map((elm, id) => {
                        if (elm.fn === "batting") {
                          return (
                            <>
                              <td key={id}>{elm.stat}</td>
                            </>
                          );
                        }
                      })} */}
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    {/* {playerdata &&
                      playerdata.stats.map((elm, id) => {
                        if (elm.fn === "batting") {
                          return (
                            <>
                              <td key={id}>{elm.value}</td>
                            </>
                          );
                        }
                      })} */}
                  </tr>
                </tbody>
              </table>
              <div className="h6 mt-2">Bawlling and Fielding Stats</div>

              <table class="table table-dark">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    {/* {playerdata &&
                      playerdata.stats.map((elm, id) => {
                        if (elm.fn === "bowling") {
                          return (
                            <>
                              <td key={id}>{elm.stat}</td>
                            </>
                          );
                        }
                      })} */}
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    {/* {playerdata &&
                      playerdata.stats.map((elm, id) => {
                        if (elm.fn === "bowling") {
                          return (
                            <>
                              <td key={id}>{elm.value}</td>
                            </>
                          );
                        }
                      })} */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>}
          

      
     { isshowmiddle2 && !isshowmiddle3 && <div className="middleContainer2">
            <div className="px-4 h4 mt-5 my-4"> Cricket Scedule </div>
            <table class="table table-light">
              <tbody>
                <tr className="table-dark">
                  <th scope="row"></th>
                  <td >{"Team"}</td>
                  <td >{"start Date"}</td>
                  <td >{"end Date"}</td>   
                  <td >{"One day"}</td>
                  <td >{"T-20"}</td>
                  <td >{"Squads"}</td>
                  <td >{"Test"}</td>
                  <td >{"Total Matches"}</td>
                </tr>

                {serieslist &&
                  serieslist.map((elm, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row" id={elm.id}></th>
                          <td>{elm.name}</td>
                          <td>{elm.startDate}</td>
                          <td>{elm.endDate}</td>
                          <td>{elm.odi}</td>
                          <td>{elm.t20}</td>
                          <td>{elm.squads}</td>
                          <td>{elm.test}</td>
                          <td>{elm.matches}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div> }
{isshowmiddle3 &&
          <div className="middleContainer2 px-5"> 
            <div className="px-4 h4 mt-5 my-4"> country list </div>
            <table class="table table-light w-50"> 
              <tbody>

              <tr>
      <th scope="col">flag</th>
      <th scope="col">shortname</th>
      <th scope="col">Fullname</th>

    </tr>

              {countrylist && countrylist.map((elm,id)=>{
                return(
                  <>

    
                  <tr className="table-black">
                  
                  <td className="tdd"><img className='w-100'src={elm.genericFlag} /></td>
                  <td >{elm.id}</td>
                  <td>{elm.name}</td>
                 
                </tr>
                  </>
                )
              }) }

           
              </tbody>
            </table>
          </div>}
        
        </div>
      </div>
    </>
  );
}

export default Home;
