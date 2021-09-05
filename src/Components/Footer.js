import React from 'react'
import './Footer.css'
import { useState } from 'react'; 


function Footer({onChangeInput, loadNews, searchQuery}) {
       
       const onChange = (e) => {
         onChangeInput(e.target.value)
       }
return(
        <div className='Footer'>
            <p>Applications are open for YC Winter 2022</p>
            <ul className='footerItems'>
                <li>Guidelines</li>
                <li>FAQ</li>
                <li>Lists</li>
                <li>API</li>
                <li>Security</li>
                <li>Legal</li>
                <li>Apply to YC</li>
                <li>Contact</li>
            </ul>
            <div className='search'>
             <button onClick={loadNews} >Search:</button>
            <input type="text" onChange={onChange} value={searchQuery} />
            </div>
        </div>
)
}

export default Footer
