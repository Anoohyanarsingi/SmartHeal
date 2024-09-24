import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>BIOGRAPHY</p>
          <h4>Who We Are</h4>
          <p>SmartHeal Medical Institute epitomizes excellence in healthcare, blending cutting-edge innovation with unwavering compassion. Our institution is dedicated to providing comprehensive medical services and specialized treatments tailored to meet the diverse needs of our patients.</p>
          <p>At SmartHeal, our commitment to excellence is palpable in every facet of our operation. From our state-of-the-art facilities to our esteemed team of healthcare professionals, we strive to deliver unparalleled care and support to each individual who walks through our doors.</p>
          <p>What sets SmartHeal apart is our patient-centric approach, where every decision and action is guided by the best interests of our patients. Whether it's through advanced diagnostic technologies, innovative treatment modalities, or personalized wellness programs, we are committed to empowering our patients to achieve their optimal health and well-being.</p>
          <p>Join us at SmartHeal Medical Institute, where we are dedicated to shaping the future of healthcare, one patient at a time.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
