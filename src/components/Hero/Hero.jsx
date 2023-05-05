import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Dare to live{" "}
            <span
              style={{
                color: "#E61C5D",
                fontFamily: "Barlow-Black",
                backgroundImage: `url(${require("./../../assets/medias/Vector 57.png")}`,
              }}
            >
              the life <br />
            </span>{" "}
            you've always <br />{" "}
            <span style={{ color: "#FFBD39" }}>wanted</span>.
          </h1>
          <p className="hero-subtitle">
            Life is short and the world is wide. So, better get started.
          </p>
          <div className="search">
            <div className="search-content">
              <div className="search-item">
                <img
                  src={require("./../../assets/medias/location.png")}
                  alt=""
                />
                <div className="search-item-right">
                  <div className="search-item-button">
                    <span>City</span>
                    <img
                      src={require("./../../assets/medias/arrow-down.png")}
                      alt=""
                    />
                  </div>
                  <span className="search-item-textfield">
                    Allentown, New Mexico
                  </span>
                </div>
              </div>
              <div className="search-trait"></div>
              <div className="search-item">
                <img
                  src={require("./../../assets/medias/calendar-2.png")}
                  alt=""
                />
                <div className="search-item-right">
                  <div className="search-item-button">
                    <span>Date</span>
                    <img
                      src={require("./../../assets/medias/arrow-down.png")}
                      alt=""
                    />
                  </div>
                  <span className="search-item-textfield">04 August, 2022</span>
                </div>
              </div>
              <img
                className="search-button"
                src={require("./../../assets/medias/Search button.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            className="hero-large"
            src={require("./../../assets/medias/Large.png")}
            alt=""
          />
          <img
            src={require("./../../assets/medias/Small.png")}
            alt=""
            className="hero-small"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
