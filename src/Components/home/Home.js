import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Home.css'

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
    
    function home(){
        return history.push('/')
    }
    function partners(){
        return history.push('/partners')
    }
    
    return (
        <div className='wrapper-H'>
            <div className='menu-H'>
                <button className='btn-XH' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btn-H' onClick={() => about()}>SOBRE</button>
                <button className='btn-H' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btn-H' onClick={() => contact()}>CONTATO</button>
                <button className='btn-H' onClick={() => partners()}>PARCEIROS</button>
            </div>
            <div className='content-H'>
                <h1 className='title'>DEVELOPER</h1>
            </div>
            <div className='footer-H'>
                <h3>Eduardo Silva</h3>
            </div>
        </div>
    )
}