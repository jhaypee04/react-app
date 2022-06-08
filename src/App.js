import {useState} from 'react';
import List from './List'
import data from './data'
function App() {
  const [people, setPeople] = useState(data);
  const clearAll =()=>{
    setPeople([]);
  }
  return (
      <>
        <div className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people}/>
          <button onClick={clearAll}>Clear All</button>
        </div>
      </>
    );
}

export default App;
