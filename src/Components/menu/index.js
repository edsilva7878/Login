import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'


export default function Menu(){
    const [activeMenu, setActiveMenu] = useState(false)

    console.log(activeMenu)
    


    return(
        <div className="wrapper">
            <nav className='menuHome'>
                <Link to={''} className='btnHome' >HOME</Link>
                <Link to={'/about'} className='btnHome' >SOBRE</Link>
                <Link to={'/skills'} className='btnHome'>CONHECIMENTOS</Link>
                <Link to={'/contact'} className='btnHome' >CONTATO</Link>
                <Link to={'/partners'} className='btnHome' >PARCEIROS</Link>
                <GiHamburgerMenu className='hamburger' onClick={()=>setActiveMenu(!activeMenu)} />
            </nav>
            <div className={`cardMenu${activeMenu ? '-active' : ''}`}>
                <MdClose style={{color: 'white'}} className='closeMenu' onClick={() => setActiveMenu(false)}/>
                <Link to={'/'} className='btnCard' >HOME</Link>
                <Link to={'/about'} className='btnCard' >SOBRE</Link>
                <Link to={'/skills'} className='btnCard' >CONHECIMENTOS</Link>
                <Link to={'/contact'} className='btnCard' >CONTATO</Link>
                <Link to={'/partners'} className='btnCard' >PARCEIROS</Link>
            </div>
        </div>
    )
}