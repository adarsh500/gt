import React from 'react';
import styles from './PostList.module.css';
import Post from '../Post';

const PostList = (props) => {
  const { posts, className } = props;
  return (
    <div className={className ? className : styles.postsContainer}>
      {posts?.map((post) => {
        const {
          urls,
          description,
          alt_description,
          blur_hash,
          id,
          links,
          likes,
          liked_by_user,
          user,
        } = post;
        return (
          <Post
            key={id}
            urls={urls}
            description={description}
            alt_description={alt_description}
            blur_hash={blur_hash}
            id={id}
            links={links}
            likes={likes}
            liked_by_user={liked_by_user}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default PostList;
