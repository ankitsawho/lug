import React from 'react'
import './css/Window.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Window() {
  return (
    <div className='window'>
        <div className="title-bar">
            <div></div>
            <span className="window-title">
                <b>Home</b>
            </span>
                <AiFillCloseCircle  className="window-actions" />
        </div>
        <div className="home-content">
        </div>
    </div>
  )
}

export default Window