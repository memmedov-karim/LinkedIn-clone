import React from 'react'
import {FaSquare} from 'react-icons/fa'
import './leftside.css';
export default function Lefsection() {
  return (
    <div className='leftsection'>
      <div className='left-head'>
      <img className='bck' src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/coding_reuters-sixteen_nine.jpg?VersionId=BB7A90pJLxZgcqT5KFCUhs6vkBSI3Dul' alt='background' />
      <div className='profpicdiv'>
        <img style={{objectFit:"cover",width:"90%",height:"60px",borderRadius:"50%",marginLeft:"5%",marginTop:"3px"}} src='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' alt='prof' />
      </div>
      <div className='name-desc'>
        <div className='name'>Shikhkarim Mammadov</div>
        <p>Mern Stack developer</p>
      </div>
      <hr />
      <div className='prof-detail'>
        <div className='first'><small>Who's viewed your profile</small> <span>234</span></div>
        <div className='first'><small>Impressions of your posts</small> <span>2344</span></div>
      </div>
      <hr />
      <div className='third'>
        <a style={{fontSize:"13px",width:"100%"}} href='http://www.google.com'>Access exdusive tools & insights</a>
        <div className='down-left'>
          <FaSquare style={{color:"gold"}} /> <a style={{fontSize:"13px",width:"100%"}} href='http://www.google.com'>Try premium for free</a>

        </div>
      </div>

      </div>
        
    </div>
  )
}
