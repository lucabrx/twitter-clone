import Header from '@/components/Header';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import {ClipLoader} from 'react-spinners';
import { type FC } from 'react';
import UserHero from '@/components/users/UserHero';
import UserBio from '@/components/users/UserBio';
import PostFeed from '@/components/posts/PostFeed';

interface UserProps {
  
}

const User: FC<UserProps> = ({}) => {
    const router = useRouter();
    const {userId} = router.query
    const {data: fatchedUser, isLoading} = useUser(userId as string)

    if(isLoading || !fatchedUser) {
        return (
            <div className='flex justify-center items-center h-full'>
                <ClipLoader color="lightblue" size={100} />
            </div>
        )
    }
  return (
<> 
<Header 
label={fatchedUser.name}
showBackArrrow
/>
<UserHero userId={userId as string} />
<UserBio userId={userId as string} />
<PostFeed userId={userId as string} />
</>
)
}

export default User