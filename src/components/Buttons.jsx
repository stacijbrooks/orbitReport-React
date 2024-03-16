import React from 'react';
// import satData from "./components/satData";
import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
       {/* Functional component Buttons that takes props: filterByType, setSat, and displaySats */}
       {/* Button to filter Low Orbit Satellites */}
      <button onClick={() => filterByType("Low")} title="Filter Low Orbit Satellites">Low Orbit</button>
      {/* Button to filter Medium Orbit Satellites */}
      <button onClick={() => filterByType("Medium")} title="Filter Medium Orbit Satellites">Medium Orbit</button>
      {/* Button to filter High Orbit Satellites */}
      <button onClick={() => filterByType("High")} title="Filter High Orbit Satellites">High Orbit</button>
    </div>
  );
};


export default Buttons;

// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       <button>Placeholder Button</button>
//       <button>All Orbits</button>
//     </div>
//   );
// };