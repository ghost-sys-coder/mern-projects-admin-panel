import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { LightModeOutlined } from '@mui/icons-material';

import { DarkModeContext } from '../../context/darkModeContext';

import './navbar.scss';
import { useContext } from 'react';

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  
  return (
    <header className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>

        <nav className="items">
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            {darkMode ? (
              <LightModeOutlined className='icon' onClick={() => dispatch({type: 'TOGGLE'})} />
            ) : (
              <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type: 'TOGGLE'})} /> 
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img className='avatar' src="https://i.postimg.cc/htVKp81d/image1.jpg" alt="profile" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar