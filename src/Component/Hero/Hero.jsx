import React from 'react';
import arrow_btn from '../../Assets/arrow_btn.png';
import pause_icon from '../../Assets/pause_icon.png';
import play_icon from '../../Assets/play_icon.png';



import './hero.css';

export default function Hero({ setPlayStatus, heroCount, heroData, setHeroCount, playStatus }) {
    const handleHeroDotClick = (index) => {
      if(index >=0 && index<=2)
        setHeroCount(index);
      else
      setHeroCount(0);

    };

    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p> {/* Corrected from text1 to text2 */}
            </div>
            <div className='hero-explore'>
                <p>Explore the features</p>
                <img src={arrow_btn} alt="arrow button" /> {/* Added alt text */}
            </div>
            <div className='hero-dot-play'>
                <ul className='hero-dot'>
                    <li onClick={() => handleHeroDotClick(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => handleHeroDotClick(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => handleHeroDotClick(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
                <div className='hero-play'>
                  <img onClick={()=>setPlayStatus(playStatus=>!playStatus)}  src={playStatus ? pause_icon : play_icon} alt="" />
                  <p>see the video</p>
                </div>
            </div>
        </div>
    );
}
