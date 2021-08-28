import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Home.css'
import FundoHome from './images/edu.png'

export default function Home() {
    const history = useHistory()
    
    function about(){
        return history.push('/about')
    }

    function skills(){
        return history.push('/skills')
    }

    function contact(){
        return history.push('/contact')
    }

    function partners(){
        return history.push('/partners')
    }
    
    return (
        <>
            <img src={FundoHome} className='fundoHome' alt='photoHome'/>
            <div className='wrapperHome'>
            <div className='menuHome'>
                <p className='titleHome'>PAGINA INICIAL</p>
                <button className='btnHome' onClick={() => about()}>SOBRE</button>
                <button className='btnHome' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btnHome' onClick={() => contact()}>CONTATO</button>
                <button className='btnHome' onClick={() => partners()}>PARCEIROS</button>
            </div>
            <div className='contentHome'>
                <h1 className='marcaHome'>DEVELOPER</h1>
            </div>
            <div className='footerHome'>
                <h3>Eduardo Silva</h3>
            </div>
            </div>
        </>
    )
}