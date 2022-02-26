import React from 'react'
import './css/Dock.css'
import {FcHome, FcInfo,FcElectronics, FcPlanner} from 'react-icons/fc'

function Dock() {
  return (
    <div className="dock-container">
        <div className='dock'>
            <div title='Home' className="nav-icon-container">
                <FcHome className='nav-icon'/>
            </div>
            <div title='About' className="nav-icon-container">
                <FcInfo className='nav-icon' />
            </div>
            <div title='Projects' className="nav-icon-container">
                <FcElectronics className='nav-icon' />
            </div>
            <div title='Events' className="nav-icon-container">
                <FcPlanner className='nav-icon' />
            </div>
        </div>
    </div>
  )
}

export default Dock