import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';
import { FC } from 'react';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>,) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;