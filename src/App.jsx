// App.js
import React, { useEffect, useState } from 'react';
import Background from './Component/Background/Background';
import NavBar from './Component/NavBar/NavBar';
import Hero from './Component/Hero/Hero';

export default function App() {
    const heroData = [
        { text1: "Dive into", text2: "What you love" },
        { text1: "Indulge", text2: "Your passions" },
        { text1: "Give into", text2: "Our passions" },
    ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [setHeroCount]);

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <NavBar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                heroData={heroData[heroCount]}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
}
