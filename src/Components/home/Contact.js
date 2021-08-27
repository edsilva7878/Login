import React from 'react'
import {useHistory} from 'react-router-dom'
import '../home/Contact.css'
import Email from './images/email.png'
import Linkedin from './images/linkedin.png'
import Whats from './images/whats.png'
import Fone from './images/fone.png'

export default function Contact() {
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
        <div className='wrapper-C'>
            <div className='menu-C'>
                <button className='btn-XC' onClick={() => contact()}>CONTATO</button>
                <button className='btn-S' onClick={() => partners()}>PARCEIROS</button>
                <button className='btn-C' onClick={() => home()}>PAGINA INICIAL</button>
                <button className='btn-C' onClick={() => about()}>SOBRE</button>
                <button className='btn-C' onClick={() => skills()}>CONHECIMENTOS</button>
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
                    <img src={Email}/>
                    <h3>edsilva7878</h3>
                </div>
                <div className='icones'>
                    <img src={Linkedin}/>
                    <h3>in/edsilva7878</h3>
                </div>
                <div className='icones'>
                    <img src={Whats}/>
                    <h3>55 (11) 99250-6743</h3>
                </div>
                <div className='icones'>
                    <img src={Fone}/>
                    <h3>55 (11) 2935-3972</h3>
                </div>
            </div>
            <div className='footer2-C'>
                <h3>Eduardo Silva {' '}</h3>
            </div>
        </div>
    )
}