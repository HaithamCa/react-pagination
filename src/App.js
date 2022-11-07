import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setIsLoading(false);
    }
    fetchPosts();
  }, [])
  console.log(posts);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
