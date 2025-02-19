import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl : weatherImg,
        title : "Calculate Weather",
        desc : "Get accurate and up-to-date weather forecasts for your travel destination."
    },
    {
        imgUrl : guideImg,
        title : "Best Tour Guide" ,
        desc : "Connect with experienced guides to make your trip unforgettable."
    },
    {
        imgUrl : customizationImg,
        title : "Customizationr" ,
        desc : "Personalize your travel plans to fit your preferences and needs."
    },
]



const ServiceList = () => {
  return (
    <>
    {servicesData.map((item , index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}></ServiceCard>
        </Col>
    ))}
      
    </>
  );
};

export default ServiceList
