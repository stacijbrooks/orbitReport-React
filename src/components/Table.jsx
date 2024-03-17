import React from 'react';
import './styling.css';

const Table = ({ sat }) => {
  return (
    <table className="custom-table"> 
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {/* Mapping through the satellite data */}
      {sat.map((data, id) => (
        <tr key={id}>
           {/* Satellite Name */}
           <td>{data.name}</td>
           {/* Type of Satellite */}
           <td>{data.type}</td>
           {/* Launch Date */}
           <td>{data.launchDate}</td>
           {/* Status */}
           <td>{data.operational ? 'Operational' : 'Not Operational'}</td>
        </tr>
      ))}
     <tr/>
     </tbody>
   </table>
  );
};

export default Table;