import React from 'react';
// import satData from "./components/satData";
import satData from './satData';
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* Button to filter Low Orbit Satellites */}
      <button onClick={() => filterByType("Low")} title="Filter Low Orbit Satellites">Low Orbit</button>
      {/* Button to filter Medium Orbit Satellites */}
      <button onClick={() => filterByType("Medium")} title="Filter Medium Orbit Satellites">Medium Orbit</button>
      {/* Button to filter High Orbit Satellites */}
      <button onClick={() => filterByType("High")} title="Filter High Orbit Satellites">High Orbit</button>
      {/* Button to display all satellites */}
      <button onClick={() => setSat(satData)} title="Display all satellites">All Orbits</button>
    </div>
  );
};



export default Buttons;

// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       <button>Placeholder Button</button>
//       
//     </div>
//   );
// };