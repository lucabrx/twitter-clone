import { ReactNode, type FC } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
<div className='h-screen bg-neutral-900'> 
<div className='container h-full mx-auto xl:px-30 max-w-6xl'>
<div className='grid grid-cols-4 h-full'>
<div className='col-span-3 lg:col-span-2 border border-neutral-800'>
    <Sidebar />
{children}
</div>
</div>
</div>
</div>
)
}

export default Layout