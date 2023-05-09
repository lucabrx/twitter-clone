import Form from '@/components/Form';
import Header from '@/components/Header';
import PostItem from '@/components/posts/PostItem';
import usePost from '@/hooks/usePost';
import { useRouter } from 'next/router';
import { type FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface PostProps {
  
}

const Post: FC<PostProps> = ({}) => {
    const router = useRouter()
    const { postId } = router.query

    const { data: fetchedPost, isLoading } = usePost(postId as string);

    if (isLoading || !fetchedPost) {
        return (
          <div className="flex justify-center items-center h-full">
            <ClipLoader color="lightblue" size={80} />
          </div>
        )
      }

  return (
<div> 
<>
      <Header showBackArrrow label="Tweet" />
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder="Tweet your reply" />
    </>
</div>
)
}

export default Post