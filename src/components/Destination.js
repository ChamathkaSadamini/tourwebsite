import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
    return (
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      
  <DestinationData 
  className="first-des"
  heading="Taal Volcano,Batangas"
  text="On Volcano Island, the destruction was complete. It seems that when the black, fan-shaped cloud spread, it created a blast downward that forced hot steam and gases down the slopes of the crater, accompanied by a shower of hot mud and sand. Many trees had their bark shredded and cut away from the surface by the hot sand and mud. This shower was the main cause of the loss of life and destruction of property around the volcano."
  img1={Mountain1}
  img2={Mountain2}
  />
   <DestinationData 
  className="first-des-reverse" 
  heading="Taal Volcano,Batangas"
  text="On Volcano Island, the destruction was complete. It seems that when the black, fan-shaped cloud spread, it created a blast downward that forced hot steam and gases down the slopes of the crater, accompanied by a shower of hot mud and sand. Many trees had their bark shredded and cut away from the surface by the hot sand and mud. This shower was the main cause of the loss of life and destruction of property around the volcano."
  img1={Mountain1}
  img2={Mountain2}
  />
      </div>
    );
  };
  
  export default Destination;