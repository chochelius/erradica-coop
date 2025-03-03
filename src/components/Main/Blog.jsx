import fetchAllPosts from "../../api/Api";
import PostCard from "../PostCard";
import { useEffect, useState } from "react";

function Blog() {
  const [results, setResults] = useState([]);
  const [showNoPostsMessage, setShowNoPostsMessage] = useState(false);

  useEffect(() => {
    fetchAllPosts().then((data) => {
      setResults(data);

      if (data.length === 0) {
        setTimeout(() => {
          setShowNoPostsMessage(true);
        }, 1000);
      } else {
        setShowNoPostsMessage(false);
      }
    });
  }, []);

  // if results.length is equal to 0 then render on span id="ifNone" <div>No hay entradas en este blog</div>

  return (
    <div className="mt-5">
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
          className="mt-5"
        />
      ))}

      <span id="ifNone">
        {showNoPostsMessage && <div>No hay entradas en este blog</div>}
      </span>
    </div>
  );
}

export default Blog;
