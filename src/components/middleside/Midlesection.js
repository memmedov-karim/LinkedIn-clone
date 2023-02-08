import React from 'react'
import './midlesection.css';
import Sharepost from '../midlesharepost/Sharepost';
import Userposts from '../userposts/Userposts';
import Sort from '../Sort/Sort';
export default function Midlesection() {
  
  return (
    <div className='middle'>
        <Sharepost />
        <Sort />
        <div className='alluserposts'>
        <Userposts />
        <Userposts />
        <Userposts />
        <Userposts />
        

        </div>
        
    </div>
  )
}
