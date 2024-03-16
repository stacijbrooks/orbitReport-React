import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import React, { useState } from 'react';
//import React from 'react';
//import { usesState } from "react";



function App() {
  let [sat, setSat] = useState(satData);
  //satData.map((data) => data.orbitType):This part of the code maps over each element in satData and extracts the orbitType property from each object. 
  //So, it creates an array containing all the orbitType values.
  let displaySats = [...new Set(satData.map((data) => data.orbitType))]; //[...new Set(satData.map((data) => data.orbitType))]: Finally, the spread syntax ... is used to spread the unique elements of the Set back into a new array. This ensures that displaySats is an array containing only unique orbitType values.
  //This ensures that displaySats is an array containing only unique orbitType values.

  //Arrow fuunction to filter satellites by orbit type
  let filterByType = (currentType) => {
    //Filter satellite data based on current orbit type
    let displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    })
    //Update state variable with filtered satellite data
    setSat(displaySats);
  }

  //Render components with props
  return (
    <div>
      <Banner /> {/* Nesting the Banner component */}
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;