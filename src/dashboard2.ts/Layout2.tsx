import React from 'react'
import Header2 from './Header2';
import { Outlet } from 'react-router-dom';
import Sider from '../components/static/Sider';
import Sider2 from './Sider2';

const Layout2 = () => {
  return (
    <div className=' flex'>
        <div>
            <Sider2/>
        </div>
       <div>
       <Header2/>
        <Outlet/>
       </div>
    </div>
  )
}

export default Layout2;