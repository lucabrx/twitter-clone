import Link from 'next/link';
import { type FC } from 'react';
import { FaFeather } from 'react-icons/fa';

interface SidebarTweetButtonProps {
  
}

const SidebarTweetButton: FC<SidebarTweetButtonProps> = ({}) => {
  return (
<Link href="/"> 
<div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
    <FaFeather color="white" size="24" />
</div>
<div className='mt-6 hidden lg:flex justify-center px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
<button className='hidden lg:block text-center font-semibold text-white text-xl'>Tweet</button>
</div>
</Link>
)
}

export default SidebarTweetButton