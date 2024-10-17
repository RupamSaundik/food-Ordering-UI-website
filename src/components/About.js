import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            It's the perfect blend of freshness, quality, and flavor in every dish we serve. We use only the finest ingredients, carefully sourced to ensure each bite is packed with taste and nutrition. Our chefs craft every meal with love and attention to detail, bringing you the best flavors from around the world. Whether you're craving comfort food or something exotic, we’ve got something for everyone. Experience food that's not just delicious but made to leave you wanting more!"
            </p>
           
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
