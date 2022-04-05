import React from 'react';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import './HomePage.css'

function HomePage() {
  return (
    <div>
        <Header />
        <HeroSection />
        <main className='main__container'>
          <FeaturedProperties />
        </main>
    </div>
  )
}

export default HomePage;