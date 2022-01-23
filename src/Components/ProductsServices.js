import React from 'react'

import Services from './ProductsServicesComponents/Services'

import CTAAsset from "../assets/triangle-asset-orange.svg";

import '../styles/ProductsServices.css'

function ProductsServices() {

  const services = [
    {
      title: 'Software as a Service',
      description: 'We provide a full range of SaaS solutions to help you manage and grow your brand/business.'
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
          {services &&
            services.map((service, index) => (
              <Services key={index} service={service} />
            ))}
        </div>
        <div className="services-cta">
          <div className="services-pitch">
            <p>
              <b><i>Growth</i></b> is a word that every business owner values. Growth is the
              motive that drives every business and it is the reason for
              investing time, effort, skill and money in any business.
            </p>
            <p>
              There are three things that contribute maximally to the growth of
              a business/brand:
            </p>
            <ol type="number">
              <li>
                <h3>Great User Interaction</h3>
                This makes it easy for your customers to communicate with you,
                enjoy your products or services and carry out activities or
                transactions
              </li>
              <li>
                <h3>Feedbacks</h3>
                This helps to determine the effectiveness and downsides of your
                services and make necessary adjustments
              </li>
              <li>
                <h3>Metrics</h3>
                This helps to develop successful business strategies based on
                important and precise data
              </li>
            </ol>
            <p>
              At Pyvot360, <b><i>we design and develop user friendly and functional
              applications</i></b> that helps you manage your business, connect with
              your customers and evaluate important metrics.
            </p>

            <p>
              Our services are <b><i>palatable for small and medium scale businesses</i></b>
                , and our <b><i>pricing schemes are cheap and moderate.</i></b>
            </p>
          </div>
          <a className="services-cta-link" href="#contact">
            GIVE US A TRY
            <img
              className="services-cta-asset"
              src={CTAAsset}
              alt=""
              width="10%"
            />
          </a>
          <div className="services-cta-tagline">It takes only few steps!</div>
        </div>
      </div>
    );
}

export default ProductsServices
