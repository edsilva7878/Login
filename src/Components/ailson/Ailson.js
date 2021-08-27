import React from 'react'
import {useHistory} from 'react-router-dom'
import '../ailson/Ailson.css'
export default function Home() {
    const history = useHistory()
    function ailsonAbout(){
        return history.push('/ailsonabout')
    }
    function ailsonServices(){
        return history.push('/ailsonservices')
    }
    function ailsonContact(){
        return history.push('/ailsoncontact')
    }
    function ailsonPartners(){
        return history.push('/ailsonPartners')
    }
    
    return (
        <div className='wrapper'>
            <div className='menu1'><h7>Ailson Tenório Advogado</h7></div>
            <div className='menu2'></div>
            <div className='menu3'>
                <button className='btnH' onClick={() => ailsonAbout()}>SOBRE</button>
                <button className='btnH' onClick={() => ailsonServices()}>SERVIÇOS</button>
                <button className='btnH' onClick={() => ailsonContact()}>CONTATO</button>
                <button className='btnH' onClick={() => ailsonPartners()}>PARCEIROS</button>

            </div>
            <div className='content'>
            </div>
            <div className='footer1'>            </div>
            <div className='footer2'>
                <h3>TODOS OS DIREITOS RESERVADOS - AILSON TENÓRIO ADVOGADO 2021</h3>
            </div>
        </div>
    )
}