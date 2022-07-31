import { useState } from 'react'
import Navdb from './db/Navdb'

const Nav = ({ handleClick }) => {
    const [ data, setData ] = useState(Navdb)
    // console.log(data)

    return ( 
        <>
            <div className='nav'>
                { data.map((tab) => {
                    const { id, tabName, tabLink } = tab
                    return (
                        <span  
                        key={id} 
                        className="tab-toggler"
                        onClick={ (e) => { handleClick(id)}}
                        >{tabName}</span>
                    )
                })}
            </div>
        </>
     );
}
 
export default Nav;