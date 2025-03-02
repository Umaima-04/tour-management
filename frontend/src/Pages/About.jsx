import React from 'react';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import Subtitle from '../shared/Subtitle';
import { Container, Row, Col } from 'reactstrap';
import './../styles/about.css';

const About = ({ title, mission, features }) => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">{title}</h1>
        <p className="about-text">
          NexTRIP is your ultimate travel companion, designed to make your journeys seamless and stress-free.
          Whether you are planning a solo trip, a family vacation, or an adventure with friends, NexTRIP helps
          you explore the best destinations with ease.
        </p>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">{mission}</p>
        <h2 className="about-subtitle">Why Choose NexTRIP?</h2>
        <ul className="about-list">
          {features.map((feature, index) => (
            <li key={index} className="about-list-item">{feature}</li>
          ))}
        </ul>
      </div>

      {/* Testimonial Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>What Our Fans Say About Us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

// Default Props
About.defaultProps = {
  title: 'About NexTRIP',
  mission: 'Our mission is to empower travelers with smart tools, real-time information, and personalized recommendations to enhance their travel experiences.',
  features: [
    'Real-time travel updates',
    'Weather check for your destinations',
    'Personalized itinerary planning',
    'Seamless booking for hotels and activities',
    'Community-driven travel tips',
  ],
};

export default About;
