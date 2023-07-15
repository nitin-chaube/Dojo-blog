import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
      const {data:blogs, isPending, Error} = useFetch('http://localhost:8000/blogs');

      return ( 
        <div className="home">
          { Error && <h1>{ Error.message }</h1>}
          { isPending && <h1>Loading....</h1> }
          { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
} 
export default Home;