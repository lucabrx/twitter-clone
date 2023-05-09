import useUsers from '@/hooks/useUsers';
import { type FC } from 'react';
import Avatar from '../Avatar';
import Link from 'next/link';



const Followbar: FC = ({}) => {
  const { data: users = [] } = useUsers()

  if(users.length === 0) return null

  return (
    <div className="px-6 py-4 hidden lg:block">
    <div className="bg-neutral-800 rounded-xl p-4">
      <h2 className="text-white text-xl font-semibold">Who to follow</h2>

<div className='flex flex-col mt-4 gap-6'>
{users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <Link href={`/users/${user.id}`} className="text-white font-semibold text-sm hover:underline">{user.name}</Link>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
</div>
</div>
</div>
)
}

export default Followbar