import ReactPlayer from 'react-player'
import * as d3 from 'd3';
import './App.css';

import { PieChart } from './components/Graphs/PieChart';
import { CircleMask } from './components/CircleMask';

function App() {

  let loneTravelers = [ 
    {type: "Reist alleen", color: "#FF5F5F", obsAmount: 81, estAmount: 1060}, 
    {type: "Reist niet alleen", color: "#FFCE5D", obsAmount: 30, estAmount: 393}
  ]
  let phoneTravelers = [ 
    {type: "Gebruikt mobiel", color: "#FF5F5F", obsAmount: 63, estAmount: 825}, 
    {type: "Gebruikt geen mobiel", color: "#FFCE5D", obsAmount: 48, estAmount: 628}
  ]

  return (
    <div className="App">
      
        <CircleMask />

        <div id="pieChartContainer">            
          <PieChart title={"Reist alleen of in een groep"} data={loneTravelers}/>
          <PieChart title={"Gebruikt mobiel tijdens het reizen"} data={phoneTravelers}/>     
        </div>
        
        <ReactPlayer controls="true" width="1920" height="1080" playing={true} muted={true} url={"http://thenewcode.com/assets/videos/ocean-small.mp4"}/>
        <img id="stillShot" alt="Black and White still shot" src="https://i.redd.it/c3uhsgo1vx541.jpg"></img>
        
    </div>
  );
}

export default App;
