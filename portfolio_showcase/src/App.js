import './App.scss'; 
import React, { useState } from 'react';
import HiddenSearch from './Components/HiddenSearch/HiddenSearch';
              

function App() { 
   
  return (
    <div className="App">
      <div className="container">   
      <HiddenSearch></HiddenSearch>
      </div> 
    </div>
  );
}

export default App;
