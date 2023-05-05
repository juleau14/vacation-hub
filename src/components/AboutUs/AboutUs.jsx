import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <div className="about-us-left">
          <img
            className="about-us-back"
            src={require("./../../assets/medias/Back.png")}
            alt=""
          />
          <img
            src={require("./../../assets/medias/Front.png")}
            alt=""
            className="about-us-front"
          />
        </div>
        <div className="about-us-right">
          <div>
            <h3 className="about-us-pretitle">ABOUT-US</h3>
            <h2 className="about-us-title">
              Our tour plan is to
              <br />
              fulfil your <span style={{ color: "#E61C5D" }}>dream wish</span>
            </h2>
          </div>
          <p className="about-us-text">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </p>
          <div className="about-us-insight">
            <div className="about-us-insight-item">
              <span className="about-us-insight-number">15</span>
              <span className="about-us-insight-legend">
                Years of Experience
              </span>
            </div>
            <div className="about-us-insight-item">
              <span className="about-us-insight-number">1k</span>
              <span className="about-us-insight-legend">Sucessful Trips</span>
            </div>
            <div className="about-us-insight-item">
              <span className="about-us-insight-number">20k</span>
              <span className="about-us-insight-legend">Happy Customers</span>
            </div>
            <div className="about-us-insight-item">
              <span className="about-us-insight-number">4.9</span>
              <span className="about-us-insight-legend">Overall Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
