import React from 'react'
// import './servicelist.css'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "calculate weather",
        desc: "Check real-time weather conditions for your destination so you can pack right and plan better"
    },
{
    imgUrl: guideImg,
        title: "Best Tour Guide",
            desc: "Discover hidden gems and must-see spots with guides who know every corner From local stories to insider tips, we make every tour personal and unforgettable Let us turn your trip into a truly guided adventure!",
    },
{
    imgUrl: customizationImg,
        title: "customization",
            desc: "Why follow the crowd when you can create your own path From destinations to daily plans, we tailor every detail to match your vibe Travel made personal — just the way you like it! ✈️🗺️",
    },
]
const ServicesList = () => {
    return (<>
        {
            servicesData.map((item, index) => (
                <Col lg='3' md="6" sm="12" className="mb-4" key={index} >
                    <ServiceCard item={item} />
                </Col>
            ))}
    </>
    );
};

export default ServicesList;