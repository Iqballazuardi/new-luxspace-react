import React from 'react'

import Header from 'parts/Header'
import Hero from 'parts/HomePage/Hero'
import BrowserRoom from 'parts/HomePage/BrowserRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import useScrollAnchor from 'helpers/hooks/useScrollAnchor'
import useModalDOM from 'helpers/hooks/useModalDOM'


export default function HomePage(props) {
    useScrollAnchor()
    useModalDOM()
    return (
       <>
            <Header theme="white" position="absolute"/>
            <Hero/>
            <BrowserRoom/>
            <JustArrived/>
            <Clients/>
            <Sitemap/>
            <Footer/>
       </>
    )
}
