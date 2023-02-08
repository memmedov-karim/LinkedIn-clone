import React from 'react'
import './rightside.css';
import {BsFillExclamationSquareFill,BsArrowRight} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa'
export default function Rightside() {
  return (
    <div className='rightside'>
        <div className='righthead'>
          <h2 className='rightheadh2'>Add to your feed</h2>
          <BsFillExclamationSquareFill className='righticons' />
        </div>
        <div className='rightpeoples'>
          <div className='rightpeople'>
            <img className='rigthpict' alt='img' src='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' />
            <div className='rightinfopeople'>
              <div style={{color:"white"}} className='rightname'>Shikhkarim Mammadov</div>
              <div style={{color:"white"}} className='rightjob'>Full stack developer</div>
              <div style={{color:"white"}} className='righthobby'>Mathematics</div>
              <button className='rightfollowbutton'><FaPlus className='righticons' /><span style={{color:"white",marginLeft:"4px"}}>Follow</span></button>
            </div>
          </div>
          <div className='rightpeople'>
            <img className='rigthpict' alt='img' src='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' />
            <div className='rightinfopeople'>
              <div style={{color:"white"}} className='rightname'>Shikhkarim Mammadov</div>
              <div style={{color:"white"}} className='rightjob'>Full stack developer</div>
              <div style={{color:"white"}} className='righthobby'>Mathematics</div>
              <button className='rightfollowbutton'><FaPlus className='righticons' /><span style={{color:"white",marginLeft:"4px"}}>Follow</span></button>
            </div>
          </div>
          <div className='rightpeople'>
            <img className='rigthpict' alt='img' src='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' />
            <div className='rightinfopeople'>
              <div style={{color:"white"}} className='rightname'>Shikhkarim Mammadov</div>
              <div style={{color:"white"}} className='rightjob'>Full stack developer</div>
              <div style={{color:"white"}} className='righthobby'>Mathematics</div>
              <button className='rightfollowbutton'><FaPlus className='righticons' /><span style={{color:"white",marginLeft:"4px"}}>Follow</span></button>
            </div>
          </div>
          <div style={{fontSize:"15px"}} className='rightfooter'><span style={{color:"white"}}>View all recomendations</span><BsArrowRight className='righticons' /></div>

        </div>
    </div>
  )
}
