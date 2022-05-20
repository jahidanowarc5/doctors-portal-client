import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
import bgImage from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{
          background:`url(${bgImage})`
        }} className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-full lg:max-w-xl flex-1 rounded-lg shadow-2xl" alt=""/>
          <div className='flex-1'>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;