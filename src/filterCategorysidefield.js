import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [keysSet, setKeysSet] = useState([]);
  // const [dataForAll,setDataForAll]=useState([])
 
  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Assuming the API data is an array of objects with 'id' as the key
        // setDataForAll(response.data);
        const apiData = response.data;
        const keys = apiData.map((items) => items.category);
        console.log(keys);

        // Create a Set from the keys
        const uniqueKeys = new Set(keys);

        // Update the state with the data and the Set of keys

        setKeysSet(uniqueKeys);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts.

  //Price range from low to high and high to low
 
  // const ascsort=dataForAll.sort((a,b)=>
  // a.price-b.price )
  // console.log(ascsort);  
  // ;
  
//highest to lowest

// const dessort=dataForAll.sort((a,b)=>
// b.price-a.price)
//   ;
//   console.log(dessort);

//Aplha ascending
// const desalpha=dataForAll.sort((a,b)=>
//   b.title-a.title)
//   console.log(desalpha);
//   ;
 

  //alphs Descending

  // const ascalpha=dataForAll.sort((a,b)=>
  //   a.title-b.title)
  // ;
  // console.log(ascalpha);

  return (
    <div>
      <div className="side-grid">
        <h4>Category</h4>
        <ul>
          {[...keysSet].map((key) => (
            <div>
              {" "}
              <input type="checkbox" value={key} />
              <label for={key}>{key}</label>
              <br></br>
            </div>
          ))}
        </ul>

        <h4>Range</h4>
        <div>
          <input type="checkbox" value="0-10"></input>
          <label>0-10</label>
          <br></br>
          <input type="checkbox" value="0-10"></input>
          <label>0-10</label>
          <br></br>
          <input type="checkbox" value="0-10"></input>
          <label>0-10</label>
        </div>
        <h4>Sorting Range</h4>
        <select class="dropdown1">
          <option value="hightolow" >HIGH--LOW</option>
          <option value="lowtohigh" >LOW--HIGH</option>
        </select>
        <h5>AlphaArrange</h5>
        <select class="dropdown2">
          <option value="alphaascending">A-Z</option>
          <option value="alphadescending">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default MyComponent;
