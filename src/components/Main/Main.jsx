import fetchAllPosts from "../../api/Api";
import PostCard from "../PostCard"
import { useEffect, useState } from "react";



function Main() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchAllPosts().then((data) => {
      setResults(data);
    });
  }, []);

  console.log(results);


  return (
    <div>
      {results.map((post) => (
        <PostCard
          key={post.id} // Assign a unique key for each PostCard
          title={post.title}
          content={post.content}
          imgurl={post.imgurl}
          created={post.created}
          updated={post.updated}
          user={post.user}
          likes={post.likes}
        />
      ))}


    </div>
  )
};

export default Main;