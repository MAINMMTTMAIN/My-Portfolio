import React, { useState, useEffect } from "react";
import {
  Main,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import Loading from './components/Loading';   // ← اضافه شد
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isLoading, setIsLoading] = useState(true);   // ← اضافه شد

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

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
    );
}

export default App;