import Home from "./Pages/Home";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";




const App = () => {
const[data1, setdata] = useState([]);
console.log(data1);
useEffect(() => {
  DataApi();
},[]

)

const DataApi= async() => {
  const response = await fetch('https://fakestoreapi.com/products');
  const jsondata = await response.json();
  setdata(jsondata);


}

  return <Home/>

};

export default App;