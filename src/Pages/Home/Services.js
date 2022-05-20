import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity filliing",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth whitening",
            description: "",
            img: whitening
        },
    ]
    return (
        <div>
            <div className='text-center my-28'>
                <h3 className='text-primary text-xl font-bold'>Our services</h3>
                <h2 className='text-4xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="lg:max-w-sm w-full rounded-lg shadow-2xl" alt="" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional dental care, On your term</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                           <PrimaryButton>GET STARTED</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;