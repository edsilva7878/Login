import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Partners.css'
import Danilo from './images/danilo.png'
import Jaine from './images/jaine.png'
import Tenorio from './images/tenorio.png'
import Ale from './images/ale.png'
import Fpartners from './images/partners.png'
export default function Partners() {

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
    
    return (
        <>
            <img src={Fpartners} className='fpartners' alt='fpartners' />
            <div className='wrapper-P'>
            <div className='menu-P'>
                <p className='titlePartners'>PARCEIROS</p>
                <button className='btn-P' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btn-P' onClick={() => about()}>SOBRE</button>
                <button className='btn-P' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btn-P' onClick={() => contact()}>CONTATO</button>
            </div>
            <div className='content-P'>
                <h1 className='cardP'>
                   <img src={Ale} alt='photo1'/>
                   <a href="http://mendes10segurosesaude.com.br" 
                   target="_blank" rel="noreferrer"><h1 className='titleP'>CORRETORA DE SEGUROS</h1></a>
                </h1>
                <h1 className='cardP'>
                    <img src={Tenorio} alt='photo2'/>
                    <h1 className='titleP'>ACESSORIA JURÍDICA</h1>
                </h1>
                <h1 className='cardP'>
                    <img src={Danilo} alt='photo3'/>
                    <a href="https://devdanilonascimento.com" 
                   target="_blank" rel="noreferrer"><h1 className='titleP'>DESENVOLVEDOR FRONTEND</h1></a>
                </h1>
                <h1 className='cardP'>
                    <img src={Jaine} alt='photo4'/>
                    <h1 className='titleP'>PROGRAMAÇÃO VISUAL</h1>
                </h1>
                
            </div>
            <div className='footer-P'>
                <h3>Eduardo Silva</h3>
            </div>
            </div>
        </>
    )
}