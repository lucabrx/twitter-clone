import { type FC } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const items = [
  {
    icon: BsHouseFill,
    label: 'Home',
    href: '/',
  },
  {
    icon: BsBellFill,
    label: 'Notifications',
    href: '/notifications',
    
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: "/users",
 
  },
]




const Sidebar: FC= ({}) => {
  const {data: currentUser} = useCurrentUser();

  return (
<div className='col-span-1 h-full pr-4 md:pr-6'> 
<div className='flex flex-col items-end'>
<div className='space-y-2 lg-w-[230px]'>
  <SidebarLogo />
  {
    items.map((item) => (
      <SidebarItem
      key={item.href}
      icon={item.icon}
      label={item.label}
      href={item.href}
      />
    ))
  }
  {currentUser && (
  <SidebarItem 
  onClick={() => signOut()}
  icon={BiLogOut}
  label="Logout"
  />
  )}
  <SidebarTweetButton />
  </div>
</div>

</div>
)
}

export default Sidebar