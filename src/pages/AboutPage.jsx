import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
  <img
    src="/images/contact.png"
    alt="Premium Leather Craftsmanship"
    className="about-hero-img"
  />
  <div className="about-hero-overlay">
    <h1 className="about-hero-title">Crafting Excellence in Leather</h1>
    <p className="about-hero-subtitle">
      Premium Leather Export | Trusted Manufacturing | Global Standards
    </p>
  </div>
</section>

      {/* ABOUT CONTENT */}
      <section className="about-main">
        <div className="about-container">

          <div className="about-text-block">
            <h2 className="about-heading">About Eliteinova</h2>
            <p className="about-paragraph">
              We are a trusted leather products export company committed to delivering premium-quality leather goods to global markets. 
              With a strong foundation built on craftsmanship, innovation, and ethical sourcing, we specialize in exporting a wide range of leather products that combine durability, style, and functionality.
              Our product portfolio includes leather bags, wallets, belts, footwear, accessories, and customized leather solutions designed to meet international standards and diverse client requirements. 
              Each product is crafted using carefully selected raw materials and advanced production techniques to ensure superior quality and long-lasting performance.
            </p>

            <p className="about-paragraph">
              Quality control is at the core of our operations. 
              From sourcing and processing to finishing and packaging, every stage undergoes strict inspection to maintain consistency and excellence. 
              We follow sustainable and eco-friendly practices, ensuring responsible manufacturing while minimizing environmental impact.
            </p>

            <p className="about-paragraph">
              With a customer-centric approach, we focus on timely delivery, competitive pricing, and long-term partnerships. 
              Our experienced team works closely with buyers to understand their needs and deliver tailored solutions that reflect their brand identity and market expectations.
            </p>
            <p className="about-paragraph">
              Driven by integrity, reliability, and continuous improvement, we aim to be a preferred global partner for premium leather products.
            </p>
          </div>

          <div className="about-image-block">
            <img
              src="/images/about img.jpg"
              alt="Leather Craftsmanship"
              className="about-image"
            />
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values">
        <div className="values-container">

          <div className="value-card">
            <h3>Premium Materials</h3>
            <p>
              We use carefully selected leather known for strength, texture, and
              longevity, ensuring superior performance in every product.
            </p>
          </div>

          <div className="value-card">
            <h3>Export Quality</h3>
            <p>
              Our products are crafted to meet international export requirements,
              combining global standards with refined design.
            </p>
          </div>

          <div className="value-card">
            <h3>Trusted Partnerships</h3>
            <p>
              Long-standing relationships with skilled manufacturers ensure consistency,
              reliability, and ethical production.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE + TEXT SECTION */}
      <section className="about-feature">
        <div className="feature-container">

          <div className="feature-image">
            <img src="/images/about img3.jpg" alt="Leather Products" />
          </div>

          <div className="feature-text">
            <h2>Built for Global Markets</h2>
            <p>
              Our leather goods are designed to serve diverse international markets,
              blending functionality with elegance. Whether for business, travel, or
              everyday use, Eliteinova products reflect confidence, craftsmanship, and
              lasting quality.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
