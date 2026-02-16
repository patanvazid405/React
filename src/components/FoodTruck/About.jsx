import NavScrollExample from "../navbar";
import UncontrolledExample from "./Carousel.jsx";
import "../FoodTruck/About.css"  // 👈 import css

function About() {
  return (
    <>
      <NavScrollExample />
      <UncontrolledExample />

      <div className="about-container">
        <h1 className="about-title">About Our Food Truck</h1>

        <p className="about-text">
          Welcome to Nellore’s favorite street food destination! Our Food Truck
          Restaurant was started with a simple idea – to bring delicious,
          hygienic, and affordable food to the streets of Nellore with a modern twist.
        </p>

        <p className="about-text">
          Located in the heart of Nellore, our food truck serves freshly prepared
          burgers, wraps, sandwiches, biryanis, snacks, and refreshing beverages.
          Every dish is made using high-quality ingredients and authentic spices.
        </p>

        <h2 className="section-title">Our Mission</h2>
        <p className="about-text">
          Our mission is to deliver tasty, quick, and affordable meals while
          maintaining high standards of hygiene and customer satisfaction.
        </p>

        <h2 className="section-title">Why Choose Us?</h2>
        <ul className="about-list">
          <li>Freshly prepared food every day</li>
          <li>Affordable pricing</li>
          <li>Clean and hygienic cooking environment</li>
          <li>Friendly service</li>
          <li>Unique street-style flavors</li>
        </ul>

        <h2 className="section-title">Our Vision</h2>
        <p className="about-text">
          We aim to become one of the most loved food truck brands in Nellore
          and expand to multiple locations while keeping our authentic taste consistent.
        </p>

        <p className="highlight-text">
          We're not just serving meals — we're serving happiness on wheels! 🚚🍔
        </p>
      </div>
    </>
  );
}

export default About;
