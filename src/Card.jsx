import "./App.css";

function Card({ title, description, image, link }) {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="card">
      <div className="card-image">
        <figure>
          <img className="image" src={image} alt="picture of national park" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title">{title}</p>
          <button className="map-link" onClick={openLink}>
            Link to Location
          </button>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Card;
