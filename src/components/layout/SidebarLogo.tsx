import Link from 'next/link';
import { type FC } from 'react';
import { BsTwitter } from 'react-icons/bs';

interface SidebarLogoProps {
  
}

const SidebarLogo: FC<SidebarLogoProps> = ({}) => {
  return (
<Link href="/" className='rounded-full h-14 w-14 p-4 flex justify-center items-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'> 
<BsTwitter color="white" size="28" />
</Link>
)
}

export default SidebarLogo