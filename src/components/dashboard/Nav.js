import data from './db/Navdb'

const Nav = ({ handleClick }) => {
    return ( 
        <>
            <div className='nav'>
                { data.map((tab) => {
                    const { id, tabName } = tab
                    return (
                        <span  
                            key={id} 
                            className="tab-toggler"
                            onClick={ () => { handleClick(id)}}
                        >{tabName}</span>
                    )
                })}
            </div>
        </>
     );
}
 
export default Nav;