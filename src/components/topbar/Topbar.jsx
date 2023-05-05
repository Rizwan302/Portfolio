import React from 'react'
import './topbar.scss';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({name, open, close}) {
  return (
    <div className={"topbar " + (open && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>logo</a>

          <div className="itemContainer">
          <PersonIcon className='icon' />
          <span>+92 310 1599536</span>
          <p>{name}</p>
          </div>

          <div className="itemContainer">
          <MarkunreadIcon className='icon' />
          <span>+92 310 1599536</span>
          </div>


        {/* <h1>Hello</h1> */}
        </div>
        <div className="right">
          <div className="humburger" onClick={()=> close(!open)}>
            <span className="line"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
