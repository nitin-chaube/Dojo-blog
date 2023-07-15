import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title , setTitle] = useState('');
    const [ author , setAuthor] = useState('');
    const [ body , setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {"Content-Type": "application/json"}
        }).then( () => console.log('New blog added'));
        history.push('./')
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;