import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

import "./App.css"
import { Loading } from './components/Loading';


const PageLoad = () => {
    return <>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
    </>
}

export const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            setLoading(true)
        }, 2000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [])

    return <div className="App">
        { !loading ?
            <Loading />
            :
            <PageLoad />
        }
    </div>
}