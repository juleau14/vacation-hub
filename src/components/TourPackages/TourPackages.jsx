import "./TourPackages.css";


const slidesData = [
  {
    "imgIndex": 1,
    "text": "Fall in love among the winding streets and snow-covered",
    "location": "Prague, Czechia",
    "rate": 4.9,
    "price": 200,
    "duration":10
  },
  {
    "imgIndex": 2,
    "text": "History is not about the past but a map of the past",
    "location": "Beijing, China",
    "rate": 4.9,
    "price": 450,
    "duration":5
  },
  {
    "imgIndex": 3,
    "text": "The unique character as a symbol of taste and ostentation",
    "location": "Istanbul, Turkey",
    "rate": 4.9,
    "price": 150,
    "duration":7
  },
  {
    "imgIndex": 4,
    "text": "You don't want to pitch a tent and live inside the Louvre",
    "location": "Paris, France",
    "rate": 4.9,
    "price": 100,
    "duration":10
  }
]

const TourPackages = () => {
  return (
    <div className="tour-packages-container">
      <div className="tour-packages">
        <div className="tour-packages-header">
          <div className="tour-packages-titles">
            <h3 className="tour-packages-pretitle">TOUR PACKAGES</h3>
            <h2 className="tour-packages-title">
              The amazing places around
              <br />
              <span style={{ color: "#E61C5D" }}>the world</span>
            </h2>
          </div>
          <div className="tour-packages-arrows">
            <img
              src={require("./../../assets/medias/Arrow left.png")}
              alt="arrow-left"
            />
            <img
              src={require("./../../assets/medias/Arrow right.png")}
              alt="arrow-right"
            />
          </div>
        </div>
        <div className="tour-packages-slides">
          {
            slidesData.map((data, index) => {
              return (
                <div className="tour-packages-slide">
                  <img className="tour-packages-trip-image" src={require(`./../../assets/medias/slide${data.imgIndex}.png`)} alt="slide-img" />
                  <div className="tour-packages-slide-bottom">
                    <p className="tour-packages-slide-text">{data.text}</p>
                    <span className="tour-packages-slide-location">{data.location}</span>
                    <div className="tour-packages-slide-rate">
                      <img src={require("./../../assets/medias/magic-star.png")} alt="magic-star" />
                      <span>{data.rate}</span>
                    </div>
                    <div className="tour-packages-slide-price-duration">
                      <span className="price">${data.price}</span>
                      <span className="duration">{data.duration} days tour</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
