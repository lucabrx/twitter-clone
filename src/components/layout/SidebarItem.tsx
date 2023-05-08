import { type FC } from 'react';
import { IconType } from 'react-icons';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,
}) => {
  return (
<div className='flex flex-row items-center'> 
<div className='relative rounded-full h-14 w-14 p-4 flex items-center justifty-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
  <Icon color="white" size="28"  />
  
</div>
<div className='hidden lg:flex relative items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointes '>
<Icon color="white" size="28"  />
<p className='text-xl hidden lg:block text-neutral-50'>{label}</p>
  </div>
</div>
)
}

export default SidebarItem