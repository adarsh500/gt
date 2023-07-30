import styles from './PostList.module.css';
import Post from '../Post';

const PostList = (props: any) => {
  const { posts, className, fetchNextPage } = props;
  return (
    <div className={!!className ? className : styles.postsContainer}>
      {posts?.map((post, index) => {
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
            isLast={index === posts.length - 1}
            fetchNextPage={fetchNextPage}
          />
        );
      })}
    </div>
  );
};

export default PostList;
