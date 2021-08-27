import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Skills.css'
import HTML from './images/html.png'
import CSS from './images/css.png'
import JS from './images/js.png'
import Frame from './images/frame.png'

export default function Skills() {
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
    
    function about(){
        return history.push('/about')
    }

    function partners(){
        return history.push('/partners')
    }
    
    return (
        <div className='wrapper-S'>
            <div className='menu-S'>
                <button className='btn-XS' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btn-S' onClick={() => contact()}>CONTATO</button>
                <button className='btn-S' onClick={() => partners()}>PARCEIROS</button>
                <button className='btn-S' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btn-S' onClick={() => about()}>SOBRE</button>
            </div>
            <div className='content-S'>
                <div className='card1-S'>
                    <img src={HTML} className='image'/>
                    <h1>HTML significa Hypertext Markup Language. 
                    Ele permite a criação de estruturas, parágrafos, 
                    cabeçalhos e links para páginas da internet ou aplicações.</h1>
                </div>
                <div className='card1-S'>
                    <img src={CSS} className='image'/>
                    <h1>O Cascading Style Sheets (CSS) é uma "folha de estilo" 
                    composta por “camadas” e utilizada para definir a 
                    aparência em páginas da internet que adotam para o 
                    seu desenvolvimento, linguagens de marcação 
                    (como XML, HTML e XHTML).</h1>
                </div>
                <div className='card1-S'>
                    <img src={JS} className='image'/>
                    <h1>O JavaScript (JS) é uma linguagem de programação utilizada 
                    principalmente em páginas web. Mostrar mensagens e informações, 
                    fazer verificações ou mudar dinamicamente sua apresentação, 
                    conforme a necessidade que sua página (ou aplicação) possua.</h1>
                </div>
                <div className='card1-S'>
                    <img src={Frame} className='image'/>
                    <h1>React. js é uma biblioteca JavaScript open source, utilizada
                    para construção de interfaces, nomeadas para aplicações de 
                    página única. Rápida, escalável e simples, pode ser usada com 
                    outras bibliotecas ou frameworks de JavaScript. </h1>
                </div>
            </div>
            <div className='footer-S'>
                <h3>Eduardo Silva {' '}</h3>
            </div>
        </div>
    )
}