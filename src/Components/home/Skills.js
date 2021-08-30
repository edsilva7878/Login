import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Skills.css'
import HTML from './images/html.png'
import CSS from './images/css.png'
import JS from './images/js.png'
import Frame from './images/frame.png'
import FundoSkills from './images/skills.jpg'

export default function Skills() {
    const history = useHistory()

   /*  function home(){
        return history.push('/')
    }

    function contact(){
        return history.push('/contact')
    }
    
    function about(){
        return history.push('/about')
    }

    function partners(){
        return history.push('/partners')
    } */
    
    return (
        <>
        <img src={FundoSkills} className='fundoSkills' alt='photoSkills'/>
        <div className='wrapperSkills'>
           {/*  <div className='menuSkills'>
                <p className='titleSkills'>CONHECIMENTOS</p>
                <button className='btnSkills' onClick={() => contact()}>CONTATO</button>
                <button className='btnSkills' onClick={() => partners()}>PARCEIROS</button>
                <button className='btnSkills' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btnSkills' onClick={() => about()}>SOBRE</button>
            </div> */}
            <div className='contentSkills'>
                <div className='cardSkills'>
                    <img src={HTML} className='image' alt='html'/>
                    <h1>HTML - Hypertext Markup Language. 
                    Permite a criação de estruturas, parágrafos, 
                    cabeçalhos e links para páginas da internet ou aplicações.</h1>
                </div>
                <div className='cardSkills' >
                    <img src={CSS} className='image' alt='html'/>
                    <h1>Cascading Style Sheets (CSS) - é uma "folha de estilo" 
                    composta por “camadas” e utilizada para definir a 
                    aparência em páginas da internet.</h1>
                </div>
                <div className='cardSkills'>
                    <img src={JS} className='image' alt='html'/>
                    <h1>O JavaScript (JS) - é uma linguagem de programação utilizada 
                    principalmente em páginas web.</h1>
                </div>
                <div className='cardSkills'>
                    <img src={Frame} className='image' alt='html'/>
                    <h1>React js - é uma biblioteca JavaScript open source, utilizada
                    para construção de interfaces, nomeadas para aplicações de 
                    página única.</h1>
                </div>
            </div>
            {/* <div className='footerSkills'>
                <h3>Eduardo Silva {' '}</h3>
            </div> */}
        </div>
        </>
    )
}