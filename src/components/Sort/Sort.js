import React from 'react'
import './sort.css';
import {FaSortDown} from "react-icons/fa"
export default function Sort() {
  return (
    <div className='midlesort'>
            <div className='midleline'>

            </div>
            <div style={{color:"white"}} className='midletext'>
                <span>Sort by</span>
                <FaSortDown style={{color:"hsl(0 -13% 100% / 0.6)",cursor:"pointer"}} />

            </div>
    </div>
  )
}
