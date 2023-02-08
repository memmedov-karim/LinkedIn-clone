import React from 'react'
import './sharepost.css';
import {BsImage,BsPlayBtnFill,BsFillCalendarDateFill} from 'react-icons/bs';
import {FaIndent} from 'react-icons/fa';
export default function Sharepost() {
  return (
    <div className='sharepost'>
        <div className='shareheader'>
          <img className='shareprof' alt='img' src='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' />
          <div className='sharebtn'>Start a post</div>
        </div>
        <div className='sharedown'>
          <div className='sharedownbtn'>
            <BsImage className='shareicon' />
            <span className='shareposttext'>Photo</span>
          </div>
          <div className='sharedownbtn'>
            <BsPlayBtnFill style={{color:"green"}} className='shareicon' />
            <span className='shareposttext'>Video</span>
          </div>
          <div className='sharedownbtn'>
            <BsFillCalendarDateFill style={{color:"yellow"}} className='shareicon' />
            <span className='shareposttext'>Event</span>
          </div>
          <div className='sharedownbtn'>
          <FaIndent style={{color:"pink"}} className='shareicon' />
            <span className='shareposttext'>Article</span>
          </div>
        </div>
    </div>
  )
}
