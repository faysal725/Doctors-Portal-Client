import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'we are open in 7 day',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our locaiotn',
        description: 'Brooklyn, NY',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call us now',
        description: '+155464687876',
        icon: faPhone,
        background:'primary'
    }

]

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
            
        </section>
    );
};

export default BusinessInfo;