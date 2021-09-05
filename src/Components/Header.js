import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
    <header className='header'>
       <nav className='nav'>
        <img src='https://media.glassdoor.com/sqll/971877/y-combinator-squarelogo-1469106304761.png' alt='logo' className='logo'/>
        <h3 className='title'>Hacker News</h3>
           <NavLink className='navLink' to='/'>new</NavLink> 
           <NavLink className='navLink' to='/past'>past</NavLink> 
           <NavLink className='navLink'  to='/comments'>comments</NavLink>
           <NavLink className='navLink' to='/ask'>ask</NavLink> 
           <NavLink className='navLink' to='/show'>show</NavLink> 
           <NavLink className='navLink' to='/jobs'>jobs</NavLink>
           <NavLink className='navLink'  to='/submit'>submit</NavLink>
       </nav>
      <nav> 
        <NavLink id='navLinkLogin'  to='/login'>login</NavLink>
       </nav>
    </header>
    )
}

export default Header