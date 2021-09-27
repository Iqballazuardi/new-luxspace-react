import React from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import BrowserRoom from 'parts/HomePage/BrowserRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

export default function HomePage(props) {
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
