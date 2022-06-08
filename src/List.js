
const List = (prop) => {
    const people = prop.people;
    return ( 
        <>
            {people.map((person)=>{
                const {id,name, age, image} = person;
                return (
                    <article key={id}>
                    <img src={image} alt={name} />

                    <div>
                        <h3>{name}</h3>
                        <p>{age}</p>
                    </div>
                </article>
                )
            })}
        </>
     );
}
 
export default List;