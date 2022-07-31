import { useState } from 'react'
import Nav from './Nav'
import Tabs from './Tabs';

const Dashboard = () => {
    const [ tabToggler, setTabToggler ] = useState('tab1')

    const handleClick = (id) => {
        setTabToggler(id)
    }
    return (
        <div className="parent-container">
            <Nav handleClick={handleClick} />
            <Tabs tabToggler={tabToggler} />
        </div>
     );
}
 
export default Dashboard;