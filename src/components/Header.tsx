import { useRouter } from 'next/router';
import { useCallback, type FC } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
  label: string;
  showBackArrrow? : boolean
}

const Header: FC<HeaderProps> = ({label,showBackArrrow}) => {
    const router = useRouter()

    const handleBack = useCallback(() => {
        router.back()
    }, [router])

  return (
<div className='border-b border-neutral-800 p-5'> 
<div className='flex flex-row items-center gap-2'>
    {showBackArrrow && (
        <BiArrowBack 
        onClick={handleBack}
        color="white"
        size="20"
        className='cursor-pointer hover:opacity-70 transition'
        />
    )}
    <h1 className='text-white text-xl font-semibold'>{label}</h1>
</div>
</div>
)
}

export default Header