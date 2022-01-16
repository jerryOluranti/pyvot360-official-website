import React from 'react'

import Services from './ProductsServicesComponents/Services'

import CTAAsset from "../assets/triangle-asset-orange.svg";

import '../styles/ProductsServices.css'

function ProductsServices() {

  const services = [
    {
      title: 'SaaS',
      description: 'We provide a full range of SaaS solutions to help you manage your business.'
    },
    {
      title: 'Web Development',
      description: 'We build scalable, efficient and user friendly websites and web applications for Brands and Businesses.'
    },
    {
      title: 'Mobile Development',
      description: 'We build user friendly mobile applications for both iOS and Android.'
    },
    {
      title: 'Software Development',
      description: 'We build cross-platform desktop softwares that are fast, interactive and functional.'
    },
    {
      title: 'Internship',
      description: 'We provide internship opportunities for students and young professionals.'
    }
  ];

    return (
      <div className="products-services" id="p-s">
        <div className="section-header products-services-header">
          Products & Services
        </div>
        <h2 className="products-services-sub-header">What We Offer</h2>
        <div className="products-services-container">
          { services && services.map((service, index) => (
            <Services key={index} service={service} />
          ))}
        </div>
        <div className="services-cta">
          <a className="services-cta-link" href="#contact">
           GIVE US A TRY
            <img className="services-cta-asset" src={CTAAsset} alt="" width="10%" />
          </a>
          <div className="services-cta-tagline">It takes only few steps!</div>
        </div>
      </div>
    );
}

export default ProductsServices
