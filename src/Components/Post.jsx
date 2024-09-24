import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './post.module.css'; 
import { PostList } from '../Store/post -list-store';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className={`${styles.card} ${styles.postcard}`}>
      <MdDelete className={styles.deleteIcon} onClick={() => deletePost(post.id)} />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{post.title}</h5>
        <p className={styles.cardText}>{post.body}</p>
        {Array.isArray(post.tags) && post.tags.map((tag, index) => (
          <span key={index} className={`${styles.badge} ${styles.textBgPrimary} ${styles.hashtag}`}>
            {tag}
          </span>
        ))}
        <div className={`${styles.alert} ${styles.alertSuccess} ${styles.reactions}`}>
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;
