import React from 'react';

const Home = () => {
  return (
    <main className='home container'>
        <div className='home-content'>
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='home-btn'>
                <button>Show Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className='home-shopping'>
                <p>Also Available On</p>
                <div className='shopping-logo'>
                    <img src="/images/flipkart.png" alt="flipkat-logo" />
                    <img src="/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        <div className='home-image'>
            <img src="/images/shoe_image.png" alt="shoe-img" />
        </div>
    </main>
  )
}

export default Home;
