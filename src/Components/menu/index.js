import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'


export default function Menu(){
  const history = useHistory()

    return(
        <>
            <div className='menuHome'>
                <p className='titleHome'>PAGINA INICIAL</p>
                <button className='btnHome' onClick={() => console.log('/about')}>SOBRE</button>
                <button className='btnHome' onClick={() => history.push('/skills')}>CONHECIMENTOS</button>
                <button className='btnHome' onClick={() => history.push('/contact')}>CONTATO</button>
                <button className='btnHome' onClick={() => history.push('/partners')}>PARCEIROS</button>
            </div>
        </>
    )
}