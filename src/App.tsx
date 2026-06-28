<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useState, useEffect} from "react";
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
import {
  Main,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
<<<<<<< HEAD
import Loading from './components/Loading';   // ← اضافه شد
=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(true);   // ← اضافه شد
=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

<<<<<<< HEAD
    // انیمیشن لودینگ برای اولین بار
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800); // ۱.۸ ثانیه نمایش لودینگ

        return () => clearTimeout(timer);
    }, []);

    // اسکرول اولیه (کد قبلی)
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            {/* Preloader - فقط برای اولین لود */}
            {isLoading && <Loading />}

            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} ${isLoading ? 'hidden' : ''}`}>
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <FadeIn transitionDuration={700}>
                    <Main/>
                    <Project/>
                    <Contact/>
                </FadeIn>
                <Footer />
            </div>
        </>
=======
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
    );
}

export default App;