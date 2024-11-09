import { PersonOutline } from '@mui/icons-material';
import Link from 'next/link';
import { FC } from 'react';

const UserInfo: FC = () => (
  <Link href="#" id='user' className='flex gap-4 items-center border-t-2 pt-4 px-4 my-2'>
    <PersonOutline sx={{ fontSize: '1.2rem' }} />
    <div className='text-left'>
      <p className="text-[.9rem]">Nyah Mukassa</p>
      <p className="text-[.9rem]">example@email.com</p>
    </div>
  </Link>
);

export default UserInfo;