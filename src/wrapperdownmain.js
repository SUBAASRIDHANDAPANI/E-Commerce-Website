// import React from 'react';
// import Side from './sidebarbar';
// import Main from "./allTheItems";

// const wrapperdown=()=>{



//     return (
//     <div className='wrappersideandmain'> 
//         <div className='side-grid'>
//             <Side  />
//         </div>
//         <div className='main-grid'>
//             <Main  />
//         </div>
//    </div>
       
//     )
// }
// export default wrapperdown;

import React, { useState, useEffect } from 'react';
import Side from './sidebarbar';
import Choose from "./allTheItems"; // Make sure to import the Choose component

const WrapperDown = () => {
  // Define and manage your filteredData state here (fetch and filter data as needed)
  const [filteredData, setFilteredData] = useState([]);

  // Fetch and filter data when needed (e.g., useEffect)

  return (
    <div className='wrappersideandmain'> 
      <div className='side-grid'>
        <Side />
      </div>
      <div className='main-grid'>
        {/* Pass the filteredData to the Choose component */}
     
      </div>
    </div>
  );
}

export default WrapperDown;
