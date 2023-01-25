import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/63ced3cf175c3911a2964b07');
     setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
