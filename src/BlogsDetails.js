import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/')
        });
    }

    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
        { isPending && <div>Loading...</div>}
        { error && <div>{error.message}</div>}
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by : { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
        )}
        </div>
    );
}
 
export default BlogsDetails;