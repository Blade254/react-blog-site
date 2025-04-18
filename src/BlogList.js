const BlogList = ({ title, blogs }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key="id">
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button>Delete</button>
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;