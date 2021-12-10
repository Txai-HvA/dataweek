import ReactPlayer from "react-player"
import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./App.css";

import { PieChart } from "./components/Graphs/PieChart";
import { CircleMask } from "./components/CircleMask";

function App() {

  const [title, setTitle] = useState("");

  let loneTravelers = [ 
    {type: "Alleen", color: "#FF5F5F", obsAmount: 81, estAmount: 1060}, 
    {type: "Groep", color: "#FFCE5D", obsAmount: 30, estAmount: 393}
  ]
  let phoneTravelers = [ 
    {type: "Wel", color: "#FF5F5F", obsAmount: 63, estAmount: 825}, 
    {type: "Niet", color: "#FFCE5D", obsAmount: 48, estAmount: 628}
  ]

  useEffect(() => {
      //Show title once the timing on the video is right
      setTimeout(() => {
        setTitle("Verliest de reis kleur door mobieltjes?")
      }, 40000);
  }, []);


  return (
    <div className="App">
        <h1>{title}</h1>
        <CircleMask />
        <div id="pieChartContainer">            
          <PieChart title={"Reist alleen of in een groep"} data={loneTravelers}/>
          <PieChart title={"Gebruikt mobiel tijdens het reizen"} data={phoneTravelers}/>     
        </div>
        <img id="stillShot" alt="Black and White still shot" src="https://i.imgur.com/L1fyfze.jpg"></img>
        <ReactPlayer className="videoPlayer" width="1920" height="1080" url="https://www.dropbox.com/s/ckjucys3j18wuh4/dataweek_video.mp4"
          playing
          muted/>
    </div>
  );
}

export default App;
