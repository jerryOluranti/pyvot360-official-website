import React from 'react'

import Services from './ProductsServicesComponents/Services'

import CTAAsset from "../assets/triangle-asset-orange.svg";

import '../styles/ProductsServices.css'

function ProductsServices() {
    return (
      <div className="products-services">
        <div className="section-header products-services-header">
          Products & Services
        </div>
        <h2 className="products-services-sub-header">What We Offer</h2>
        <div className="products-services-container">
          <Services />
          <Services />
          <Services />
          <Services />
          <Services />
          <Services />
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
