import React from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'

export default function Menu(){
  const history = useHistory()
 
  function home(){
    return history.push('/')
}

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
                <button className='btnHome' onClick={() => home()}>HOME</button>
                <button className='btnHome' onClick={() => about()}>SOBRE</button>
                <button className='btnHome' onClick={() => skills()}>CONHECIMENTOS</button>
                <button className='btnHome' onClick={() => contact()}>CONTATO</button>
                <button className='btnHome' onClick={() => partners()}>PARCEIROS</button>
            </div>
        </>
    )
}