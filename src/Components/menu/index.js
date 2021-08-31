import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'

export default function Menu(){
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

    return(
        <>
            <div className='menuHome'>
            <p className='titleHome'>PAGINA INICIAL</p>
                <button className='btnHome' onClick={() => about()}>SOBRE</button>
                <button className='btnHome' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btnHome' onClick={() => contact()}>CONTATO</button>
                <button className='btnHome' onClick={() => partners()}>PARCEIROS</button>
            </div>
        </>
    )
}