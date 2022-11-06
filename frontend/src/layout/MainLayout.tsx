import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';

const MainLayout = () => {
  return (
    <div className='w-full flex'>
      <div className='fixed'>as</div>
      <MainNavigation />
      <div className='ml-60 w-full'>
        <div className='fixed h-20 bg-red-500 w-full'>as</div>

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
