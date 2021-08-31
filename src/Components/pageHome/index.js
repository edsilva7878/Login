import React from 'react'
import Menu from '../menu'
import Content from '../content'
import Footer from '../footer'
import './styles.css'
import FundoHome from '../../images/edu.png'

export default function Home(){
    return(
        <>
                <img src={FundoHome} className='fundoHome' alt='fundoHome'/>
                <Menu />
                <Content />
                <Footer />
        </>
    )
}