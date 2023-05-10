import { FC } from 'react';
import CommentItem from './CommentItem';

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, any>,) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;