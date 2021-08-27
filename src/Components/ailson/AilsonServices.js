import React from 'react'
import {useHistory} from 'react-router-dom'
import '../ailson/AilsonServices.css'

export default function Home() {
    const history = useHistory()
    function ailsonAbout(){
        return history.push('/ailsonabout')
    }
    function ailsonHome(){
        return history.push('/')
    }
    function ailsonContact(){
        return history.push('/ailsoncontact')
    }
    function ailsonPartners(){
        return history.push('/ailsonPartners')
    }
   
    return (
        <div className='wrapperServices'>
            <div className='menu1'><h7>SERVIÇOS</h7></div>
            <div className='menu2'></div>
            <div className='menu3'>
                <button className='btn' onClick={() => ailsonHome()}>PÁGINA INICIAL</button>
                <button className='btn' onClick={() => ailsonAbout()}>SOBRE</button>
                <button className='btn' onClick={() => ailsonContact()}>CONTATO</button>
                <button className='btn' onClick={() => ailsonPartners()}>PARCEIROS</button>

            </div>
            <div className='content'>
                <div className='card'>
                    <h1>TRABALHISTA</h1>
                    <p>O direito do trabalho, também chamado de direito trabalhista, 
                    é um ramo do direito privado que é responsável por regular a 
                    relação jurídica entre trabalhadores e empregadores,
                    baseado nos princípios e leis trabalhistas.
                    </p>

                </div><div className='card'>
                    <h1>CÍVIL</h1>
                    <p>O Direito Civil lida com as relações jurídicas das pessoas físicas
                    e jurídicas dentro da sociedade. O Código Civil, especificamente,
                    lida com as questões da família, da vida e da morte da pessoa física, 
                    com a relação de propriedade, do casamento, entre outras.
                    </p>
                </div><div className='card'>
                    <h1>FAMÍLIA</h1>
                    <p>Direito de família é um ramo do direito que trata das questões e 
                    litígios entre entes da comunidade familiar. ... O direito de família
                    tem o objetivo de regular as regras, obrigações e direito no convívio 
                    familiar. São casos envolvendo casamento, separação, divórcio, 
                    guarda dos filhos, pensão alimentícia, adoção.
                    </p>
                </div><div className='card'>
                    <h1>CONSUMIDOR</h1>
                    <p>O Código de Defesa do Consumidor trata-se de um microssistema legislativo 
                    baseado em normas de ordem principiológicas que rege as relações de consumo, 
                    com normas de natureza pública e privada. Destarte, o CDC tem como função 
                    precípua resguardar a parte vulnerável da relação consumerista - o consumidor.
                    </p>
                </div><div className='card'>
                    <h1>TRIBUTÁRIO</h1>
                    <p>O direito tributário é um ramo do direito público que tem como propósito 
                    regular como ocorre a cobrança de tributos pelo Estado das pessoas naturais 
                    e jurídicas. A tributação no Brasil é alvo de muita dúvida e questionamento 
                    por parte da população, mas é extremamente necessária para a manutenção do Estado.
                    </p>
                </div>
            </div>
            <div className='footer1'></div>
            <div className='footer2'>
                <h3>TODOS OS DIREITOS RESERVADOS - AILSON TENÓRIO ADVOGADO 2021</h3>
            </div>
        </div>
    )
}