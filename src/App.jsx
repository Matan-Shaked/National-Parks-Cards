import Card from "./Card";
import BryceCanyonImage from "./images/bryceCanyon.jpg";
import GrandCanyonImage from "./images/grandCanyon.jpg";
import YellowStoneImage from "./images/yellowStone.jpg";
import "./App.css";

function App() {
  const BryceCanyonMap =
    "https://www.google.com/maps/place/Bryce+Canyon+National+Park/@37.5837391,-112.3556223,11z/data=!3m1!4b1!4m6!3m5!1s0x87356bc602c3eb2d:0x6be9d8fbbeac6d06!8m2!3d37.5930377!4d-112.1870895!16zL20vMGNuc3A?entry=ttu";

  const GrandCanyonMap =
    "https://www.google.com/maps/place/Grand+Canyon/@36.0997622,-112.1227843,15z/data=!3m1!4b1!4m6!3m5!1s0x80cc0654bd27e08d:0xb1c2554442d42e8d!8m2!3d36.0997631!4d-112.1124846!16s%2Fg%2F1tg6vzsz?entry=ttu";

  const YellowStoneMap =
    "https://www.google.com/maps/place/Yellowstone+National+Park/@44.5838982,-111.1734444,9z/data=!3m1!4b1!4m6!3m5!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455!16zL20vMDg4NzQ?entry=ttu";

  return (
    <div className="container">
      <div className="card-container">
        <Card
          title="Bryce Canyon"
          description="Located in Arizona and great for hikers"
          image={BryceCanyonImage}
          link={BryceCanyonMap}
        />
      </div>
      <div className="card-container">
        <Card
          title="Grand Canyon"
          description="Located in Utah and great for children"
          image={GrandCanyonImage}
          link={GrandCanyonMap}
        />
      </div>
      <div className="card-container">
        <Card
          title="Yellowstone"
          description="Located in Wyoming and great for Volcanos scientists"
          image={YellowStoneImage}
          link={YellowStoneMap}
        />
      </div>
    </div>
  );
}

export default App;
