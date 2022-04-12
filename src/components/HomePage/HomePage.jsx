import React from 'react';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import HeroSection from '../HeroSection/HeroSection';
import './HomePage.css'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <main className='main__container'>
          <FeaturedProperties />
        </main>
    </div>
  )
}

export default HomePage;