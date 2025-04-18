import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIspending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIspending(false);
            })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
        </div>
     );
}
 
export default Home;