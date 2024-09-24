import React, { useContext } from 'react';
import Post from './Post';
import { PostList } from '../Store/post -list-store'; // Ensure correct import

const Postlist = () => {
  const { postList } = useContext(PostList); // Access the context

  // Directly map over postList
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
