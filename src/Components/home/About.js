import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/About.css'
import Book from '../home/images/book.png'

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
        <div className='wrapper-A'>
            <div className='menu-A'>
                <button className='btn-XA'>SOBRE</button>
                <button className='btn-A' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btn-A' onClick={() => contact()}>CONTATO</button>
                <button className='btn-H' onClick={() => partners()}>PARCEIROS</button>
                <button className='btn-A' onClick={() => home()}>PAGINA INICIAL</button>
            </div>
            <div className='content-A'>
                <div className='card-A'>
                    <img src={Book} alt='photo1'/><br/>
                    <h1>Paulistano, casado, 43 anos...
                    Pai de 03 filhos e apaixonado pela família,
                    música e tecnologia... Estudante de Porgramação, 
                    trabalha Home Office como Analista Técnico na Empresa 
                    Claro S/A. Iniciou carreira como técnico de banda larga, 
                    e hoje, dedica horas de estudos para o React JS, buscando
                    oportunidade na área, como Desenvolvedor de Sistemas.</h1>
                </div>
            </div>
            <div className='footer-A'>
                <h3>Eduardo Silva</h3>
            </div>
        </div>
    )
}