import React from 'react'
import Menu from '../menu'
import Content from '../content'
import Footer from '../footer'
import './styles.css'
import FundoAbout from '../../images/about.jpg'

export default function Home(){
    return(
        <>
                <img src={FundoAbout} className='fundoAbout' alt='fundoAbout'/>
                <Menu />
                <Content />
                <Footer />
        </>
    )
}