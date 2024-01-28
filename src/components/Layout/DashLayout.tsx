import React from 'react'
import DashHeader from '../static/DashHeader'
import { Outlet } from 'react-router-dom'
import Sider from '../static/Sider'

const DashLayout = () => {
  return (
    <div className='flex'>
        <div>
            <Sider/>
        </div>
        <div className='w-full'>
        <DashHeader/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashLayout