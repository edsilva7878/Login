import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/About.css'
import Book from '../home/images/book.png'
import FundoAbout from './images/about.jpg'

export default function About() {
    const history = useHistory()

    function home(){
        return history.push('/')
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
            <img src={FundoAbout} className='fundoAbout' alt='photoAbout'/>
            <div className='wrapperAbout' >
            <div className='menuAbout'>
                <p className='titleAbout'>SOBRE</p>
                <button className='btnAbout' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btnAbout' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btnAbout' onClick={() => contact()}>CONTATO</button>
                <button className='btnAbout' onClick={() => partners()}>PARCEIROS</button>
            </div>
            <div className='contentAbout'>
                <div className='cardAbout'>
                    <img src={Book} alt='photoBook'/><br/>
                    <h1>Paulistano, casado, 43 anos...
                    Pai de 03 filhos e apaixonado pela família,
                    música e tecnologia... Estudante de Porgramação, 
                    trabalha Home Office como Analista Técnico na Empresa 
                    Claro S/A. Iniciou carreira como técnico de banda larga, 
                    e hoje, dedica horas de estudos para o React JS, buscando
                    oportunidade na área, como Desenvolvedor de Sistemas.</h1>
                </div>
            </div>
            <div className='footerAbout'>
                <h3>Eduardo Silva</h3>
            </div>
        </div>
        </>
    )
}