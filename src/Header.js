
const Header = ({message, arr, obj:{id, name, school, advice}}) => {
    return (
        <>
            <h1>React Tutorial</h1>
            <p>{message}</p>
            <ul>
                {arr.map((a)=> <li>{a}</li>)}
            </ul> 
            <h4>Student Name: {name}</h4>
            <p>Student School: {school}</p>
            <p>Student Number: {id}</p>
            <p>Student Advice: {advice}</p>

        </>
    );
}

export default Header;