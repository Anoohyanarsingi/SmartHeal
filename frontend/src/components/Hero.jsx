import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Introducing SmartHeal Medical Institute, where excellence meets compassionate care. Our dedicated team of healthcare professionals is committed to providing tailored medical services designed to meet your unique needs. At SmartHeal, your well-being is our priority. With our advanced platform, scheduling appointments and rescheduling are seamless, empowering you to take control of your healthcare journey. Experience the difference at SmartHeal, where exceptional care is our standard.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
