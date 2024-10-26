import { PersonOutline } from '@mui/icons-material';

const UserInfo = () => (
  <div id='user' className='flex gap-4 items-center border-t-2 pt-4 my-2'>
    <PersonOutline sx={{ fontSize: '1.2rem' }} />
    <div>
      <p className="text-[.9rem]">Nyah Mukassa</p>
      <p className="text-[.9rem]">example@email.com</p>
    </div>
  </div>
);

export default UserInfo;