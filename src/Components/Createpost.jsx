// src/Components/Createpost.js
import React, { useRef , useContext } from 'react';
import styles from './createpost.module.css'; // Import the CSS module
import { PostList } from '../Store/post -list-store';



const Createpost = () => {
  const {addPost} = useContext(PostList)

const userIdElement = useRef();
const PostTitleElement = useRef();
const postBodyElement = useRef();
const ReactionElement = useRef();
const tagsElement = useRef();


const handleSubmit = (event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const PostTitle = PostTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const Reaction = ReactionElement.current.value;
  const tags = tagsElement.current.value.split(',');

  addPost(userId,PostTitle,postBody,tags,Reaction);

  userIdElement.current.value = "";
  PostTitleElement.current.value = "";
  postBodyElement.current.value = "";
   ReactionElement.current.value = "";
   tagsElement.current.value = "";




}

  return (

    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
      <div className={styles.formGroup}>
        <label htmlFor="userId" className={styles.formLabel}>User ID</label>
        <input
          type="text"
          id="userId"
          ref={userIdElement}
          className={styles.formControl}
        />
        <label htmlFor="title" className={styles.formLabel}>Title</label>
        <input
          type="text"
          id="title"
          ref={PostTitleElement}
          className={styles.formControl}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="body" className={styles.formLabel}>Body</label>
        <textarea
          id="body"
          ref={postBodyElement}
          className={styles.formControl}
        />
      </div>
     
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tags" className={styles.formLabel}>Tags (comma separated)</label>
        <input
          type="text"
          id="tags"
          ref={tagsElement}
          className={styles.formControl}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="reactions" className={styles.formLabel}>Reactions</label>
        <input
          type="number"
          id="reactions"
          ref={ReactionElement}
          className={styles.formControl}
        />
      </div>
      <button type="submit" className={styles.btnSubmit}>Add Post</button>
      <div className={styles.formFooter}>Fill out all fields to create a new post.</div>
    </form>
  );
}

export default Createpost;


