import React from 'react';
import floride from '../../../images/fluride.png';
import cavity from '../../../images/Cavity.png';
import teeth from '../../../images/teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const serviceData = [
    {
        name: 'Flouride Treatment',
        img: floride
    },
    {
        name: 'Cavity Feeling',
        img: cavity
    },
    {
        name: 'Teeth whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color:"#1CC7C1"}}>Our Services</h5>
            <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="row w-75 mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
            
        </div>
        </section>
    );
};

export default Services;