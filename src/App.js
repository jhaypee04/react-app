// import {useState} from 'react';
import Header from './Header'

function App() {
  const message = "Welcome to react";
  const arr = [ "Ford", "Benz", "Chevrolet"];
  const obj = {
    id: 1,
    name: "Sarah",
    school: "Loctech",
    advice: "Study hard for better result"
  }
  return (
      <>
        <Header 
          message={message} 
          arr = { arr }
          obj={obj}
          />
      </>
      
    
    );
}

export default App;
