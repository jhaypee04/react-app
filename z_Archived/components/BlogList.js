
const BlogList = ({blogs, heading}) => {
    return ( 
        <div className="blog-list">
            <h1>{heading}</h1>
            {blogs.map((blog) => {
                const { id, title, author } = blog
                return (
                    <div className="blog-preview" key={id}>
                        <h2>{title}</h2>
                        <p>Written by {author}</p>
                        
                    </div>
                )
            })}
        </div>
     );
}
 
export default BlogList;