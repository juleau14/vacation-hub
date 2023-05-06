const AllToursData = [
  {
    imgIndex: 1,
    place: "Porto, Portugal",
    price: 150,
    duration: 7,
  },
  {
    imgIndex: 2,
    place: "Paris, France",
    price: 100,
    duration: 5,
  },
  {
    imgIndex: 3,
    place: "Paris, France",
    price: 250,
    duration: 6,
  },
  {
    imgIndex: 4,
    place: "Amsterdam, Netherland",
    price: 150,
    duration: 10,
  },
];

const AllTours = () => {
  return (
    <div className="all-tours">
      <div className="all-tours-titles">
        <h2 className="all-tours-title">
          We can do anything we want to
          <br />
          if <span>we stick</span> to it long enough.
        </h2>
        <h3 className="all-tours-subtitle">
          Do what you can, with what you have, where you are.
        </h3>
        <span className="all-tours-button">SEE ALL TOURS</span>
      </div>
      <div className="all-tours-cards">
        {AllToursData.map((data, index) => {
          return (
            <div className="all-tours-card">
              <img
                src={require(`./../../assets/medias/card${data.imgIndex}.png`)}
                alt="img"
              />
              <div className="card-bottom">
                <span className="all-tours-card-place">{data.place}</span>
                <div className="all-tours-card-price-duration"><span className="price">${data.price}</span><span className="duration">{data.duration} days tour</span></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTours;
