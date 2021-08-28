import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Contact.css'
import GitHub from './images/git.png'
import Email from './images/email.png'
import Linkedin from './images/linkedin.png'
import Whats from './images/whats.png'
import Fone from './images/fone.png'
import FundoContact from './images/contact.jpg'

export default function Contact() {
    const history = useHistory()

    function about(){
        return history.push('/about')
    }

    function skills(){
        return history.push('/skills')
    }

    
    function home(){
        return history.push('/')
    }

    function partners(){
        return history.push('/partners')
    }
    
    return (
        <>
            <img src={FundoContact} className='fundoContact' alt='photoContact'/>
            <div className='wrapper-C'>
            <div className='menu-C'>
                <p className='titleContact'>CONTATO</p>
                <button className='btnContact' onClick={() => partners()}>PARCEIROS</button>
                <button className='btnContact' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btnContact' onClick={() => about()}>SOBRE</button>
                <button className='btnContact' onClick={() => skills()}>CONHECIMENTOS</button>
            </div>
            <div className='content-C'>
                <form className="form">
                    <div className="inputName">
                        <label className="labelName">NOME</label><br />
                        <input className="name" type="text" size="30" /><br />
                    </div>
                    <div className="inputEmail">
                        <label className="labelEmail" >EMAIL</label><br />
                        <input className="email" type="text" size="30" /><br />
                    </div>
                    <div className="inputText">
                        <label className="labelText" >MENSAGEM</label><br />
                        <textarea className="text" rows="7" cols="30"></textarea><br />
                    </div>
                        <input className="btnSubmit" type="submit" value="Enviar" />
                </form>
                <div className='card-C'></div>
            </div>
            <div className='footer1-C'>
            <div className='icones'>
                    <img src={GitHub} alt='photo1'/>
                    <h3>edsilva7878/</h3>
                </div>
                <div className='icones'>
                    <img src={Linkedin} alt='photo2'/>
                    <h3>in/edsilva7878</h3>
                </div>
                <div className='icones'>
                    <img src={Email} alt='photo3'/>
                    <h3>edsilva7878@gmail.com</h3>
                </div>
               
                <div className='icones' >
                    <img src={Whats} alt='photo4'/>
                    <h3>55 (11) 99250-6743</h3>
                </div>
                <div className='icones' >
                    <img src={Fone} alt='photo5'/>
                    <h3>55 (11) 2935-3972</h3>
                </div>
            </div>
            <div className='footer2-C' >
                <h3>Eduardo Silva {' '}</h3>
            </div>
            </div>
        </>
    )
}