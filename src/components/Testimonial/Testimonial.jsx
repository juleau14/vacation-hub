import "./Testimonial.css";

const testimonialData = [
  {
    imgIndex: 1,
    name: "Eleanor Pena",
    job: "UI/UX Designer",
    nbStarts: 5,
    text: "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ",
  },
  {
    imgIndex: 2,
    name: "Theresa Webb",
    job: "Vlogger",
    nbStarts: 2,
    text: "In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product.",
  },
  {
    imgIndex: 3,
    name: "Anette Black",
    job: "Doctor",
    nbStarts: 4,
    text: "Testimonials work because they aren''t strong sales pitches, they come across in an unbiased voice and establish trust",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-titles">
        <h3 className="testimonial-pretitle">TESTIMONIAL</h3>
        <h2 className="testimonial-title">
          Satisfied <span style={{ color: "#E61C5D" }}>travelers</span> around
          <br />
          the world
        </h2>
      </div>
      <div className="testimonial-slider">
        <img
          className="testimonial-arrow"
          src={require("./../../assets/medias/Arrow left.png")}
          alt="arrow-left"
        />
        <div className="testimonial-slides">
          {testimonialData.map((data, index) => {
            return (
              <div className="testimonial-slide">
                <img
                  src={require("./../../assets/medias/quote-down-circle.png")}
                  alt=""
                  className="quot-img"
                />
                <img
                  src={require(`./../../assets/medias/Portrait${data.imgIndex}.png`)}
                  alt=""
                  className="testimonial-portrait"
                />
                <span className="testimonial-slide-name">{data.name}</span>
                <span className="testimonial-slide-job">{data.job}</span>
                <div className="testimonial-stars">
                  {(() => {
                    let starTab = [];
                    for (let i = 0; i < data.nbStarts; i++) {
                      starTab.push(
                        <img
                          src={require("./../../assets/medias/magic-star.png")}
                          alt=""
                          className="testimonial-star"
                        />
                      );
                    }
                    return starTab;
                  })()}
                </div>
                <p className="testimonial-slide-text">{data.text}</p>
              </div>
            );
          })}
        </div>
        <img
          src={require("./../../assets/medias/Arrow right.png")}
          alt="arrow-right"
          className="testimonial-arrow"
        />
      </div>
    </div>
  );
};

export default Testimonial;
