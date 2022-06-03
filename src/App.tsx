import React from 'react';
import ButtonOnOff from './lib/Buttons/ButtonOnOff';

function App() {
  return (
    <div className="App">
      <ButtonOnOff onChange={(e)=>{console.log(e)}} />
    </div>
  );
}

export default App;
