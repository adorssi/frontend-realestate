import React from 'react';
import './HeroSection.css';
import bgHome from '../../images/bg-home.jpg';
import SearchFormHome from '../SearchForm/SearchFormHome';

function HeroSection() {
  return (
    <div className='hero__section'>
        <div className='hero__section-title'>
            <div className='box'>
                
            </div>
            <h1 className='hero_title'> Encuentra tu <br /> próxima propiedad</h1>

        </div>
        <div className='hero__section-bgImage'>
            <img src={bgHome} alt='Banner home' />
        </div>
        <SearchFormHome />
    </div>
  )
}

export default HeroSection;