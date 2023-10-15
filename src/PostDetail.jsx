import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import posts from './posts.json'; // Import your JSON data

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the post with the matching id from your JSON data
    const foundPost = posts.find(p => p.id === postId);

    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
