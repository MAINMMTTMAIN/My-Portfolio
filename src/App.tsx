import React, { useState, useEffect } from "react";
import {
  Main,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import Loading from './components/Loading';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isLoading, setIsLoading] = useState(true);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    // Preloader (انیمیشن لودینگ)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    // Scroll to top
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            {/* Preloader */}
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