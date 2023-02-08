import React,{useState} from 'react';
import './header.css';
import {FaHome,FaUserFriends,FaWeightHanging,FaBell,FaUser,FaLinkedin,FaSearch} from 'react-icons/fa';
import {BsChatRightDotsFill,BsFillGrid3X3GapFill,BsCaretDownFill} from 'react-icons/bs';
import Meinfo from './Meinfo';
export default function Header({IsOpenmeInfo,setIsOpenMeInfo,openMeInfo}) {
  // const [IsOpenmeInfo,setIsOpenMeInfo] = useState(false);
  // const openMeInfo = () => {
  //   console.log("ok")
  //   setIsOpenMeInfo(!IsOpenmeInfo);
  // }
  return (
    <div className='cont'>
    <div className='header'>
      <div className='header-left'>
        <div className='header-icon'>
          <FaLinkedin style={{color:"hsl(0 -13% 100% / 0.6)",width:"40px",height:"40px"}} />
        </div>
        <div className='header-search'>
          <FaSearch style={{color:"hsl(0 -13% 100% / 0.6)",marginLeft:"2%"}} />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className='header-right'>
        <ul className=' ull header-right-left-elements'>
          <li className='item itemnotify'>
            <FaHome className="icon" style={{width:"22px"}} />
            <small className="textundericon">Home</small>
            <div className='notifynum nothome'><div className='white'></div></div>
          </li>
          <li className='item itemnotify'>
          <FaUserFriends className="icon" style={{width:"22px"}} />
            <small className="textundericon">My network</small>
            <div className='notifynum'><smal style={{fontSize:"10px"}}>1</smal></div>
          </li>
          <li className='item itemnotify'>
          <FaWeightHanging className="icon" style={{width:"22px"}} />
            <small className="textundericon">Jobs</small>
            <div className='notifynum'><smal style={{fontSize:"10px"}}>8</smal></div>
          </li>
          <li className='item itemnotify'>
          <BsChatRightDotsFill className="icon" style={{width:"22px"}} />
            <small className="textundericon">Messaging</small>
            <div className='notifynum'><smal style={{fontSize:"10px"}}>13</smal></div>
          </li>
          <li className='item itemnotify'>
          <FaBell className="icon" style={{width:"22px"}} />
            <small className="textundericon">Notifications</small>
            <div className='notifynum'><smal style={{fontSize:"10px"}}>3</smal></div>
          </li>
          <li onClick={openMeInfo} className='item'>
          <FaUser className="icon" style={{width:"22px"}} />
            <small className="textundericon">Me<BsCaretDownFill className='icon' /></small>
          </li>
          <li className='item-line'></li>
          <li className='item'>
          <BsFillGrid3X3GapFill className="icon" style={{width:"22px"}} />
            <small className="textundericon">Work<BsCaretDownFill className="icon"  /></small>
          </li>
          <li className=''><a style={{width:"40px",fontSize:"11px",color:"orange"}} href='https://www.google.com/'><pre>Try Premium for<br/>
          free </pre> </a></li>
        </ul>
      </div>  
      {IsOpenmeInfo && <Meinfo />}
    </div>
    </div>
  )
}
