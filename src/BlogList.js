import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ title, blogs }) => {

    console.log("Blogs data:", blogs);

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${ blog.id }`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <button>Delete</button>
                    </Link>
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;