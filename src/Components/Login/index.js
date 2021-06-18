import React, {useState} from 'react'
import LoginImage from '../Images/colab.jpg'
import './styles.css'
export default function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    function enter(){
        if(login === 'EDUARDO SILVA' && password === '123'){
            return alert(`Seja bem vindo, ${login}`)
        } else if(login === 'DANILO OLIVEIRA' && password === '101010'){
                return alert(`Seja bem vindo, ${login}`)
        } else {
            return alert('Dados inválido, tente novamente!')
        }
    }
    return (
        <div id="wrapper">
            <div id="controlers">
            <input onChange={(e)=>{setLogin(e.target.value)}}placeholder={props.phLogin} type={props.typeLogin}/>
            <input onChange={(e)=>{setPassword(e.target.value)}}placeholder={props.phPassword} type={props.typePassword}/>
            <button onClick={()=>{enter()}}>{props.nameOfButton}</button>
            </div>
        </div>

    )
}
