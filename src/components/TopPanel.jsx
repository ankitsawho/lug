import React from 'react'
import './css/TopPanel.css'
import {FcLinux} from 'react-icons/fc'
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {FaGlobe} from 'react-icons/fa'

function TopPanel() {
  return (
    <div>
        <div className="top-panel-container">
            <div className="logo">
                <FcLinux className='linux-icon' />
                LUG VITCC
            </div>
            <div className="time"></div>
            <div className="top-panel-links">
                <FaGlobe className='social' />
                <AiFillGithub className='social' />
                <AiFillInstagram className='social' />
            </div>
        </div>
    </div>
  )
}

export default TopPanel