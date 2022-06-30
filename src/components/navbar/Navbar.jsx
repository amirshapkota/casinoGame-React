import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" className='searchtext' placeholder='Search..' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' onClick={() => props.setChatPopup()}/>
            <div className="notifcount">1</div>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="notifcount">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src='./images/profile.jpeg' alt=''
            className='profilepic' />
          </div>
        </div>
      </div>
    </div>
  )
}
