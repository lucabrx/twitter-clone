import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';
import { useCallback, type FC } from 'react';
import { FaFeather } from 'react-icons/fa';



const SidebarTweetButton: FC = ({}) => {
  const router = useRouter()
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
    
  }, [loginModal])

  return (
<div onClick={onClick}> 
<div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
    <FaFeather color="white" size="24" />
</div>
<div className='mt-6 hidden lg:flex justify-center px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
<button className='hidden lg:block text-center font-semibold text-white text-xl'>Tweet</button>
</div>
</div>
)
}

export default SidebarTweetButton