import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="search..." />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon"/>
              {/* Tamil */}
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <FormatListBulletedOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <img
              src="https://velai3.s3.ap-south-1.amazonaws.com/11/IMG_20230202_123111_022.jpg"
              alt="profile"
              className="avator"/>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar