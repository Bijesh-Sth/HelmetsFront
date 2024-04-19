import React from 'react';
import Feedback from '../../Components/Feedback/Feedback';
import Carousel from '../../Components/Carousel/Carousel';
import FeaturedProducts from '../../Components/Featured/FeaturedProducts';



const Home =() =>{
  return (
    <>  
    <Carousel/>
    <FeaturedProducts/>
    <Feedback/>
    </>
  )
}

export default Home