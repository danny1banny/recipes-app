import {FC} from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout:FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
