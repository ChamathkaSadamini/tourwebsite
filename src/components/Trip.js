import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>

<div className="tripcard">
<TripData 
image={Trip1}
heading = "Trip in Indonesia"
text = "Ubud could be considered one of the best cities to visit in Indonesia. Situated on the island of Bali, Ubud exudes peace and tranquillity with lush rice terraces and mountains in the backdrop."
/>
<TripData 
image={Trip2}
heading = "Trip in Indonesia"
text = "Ubud could be considered one of the best cities to visit in Indonesia. Situated on the island of Bali, Ubud exudes peace and tranquillity with lush rice terraces and mountains in the backdrop."
/>
<TripData 
image={Trip3}
heading = "Trip in Indonesia"
text = "Ubud could be considered one of the best cities to visit in Indonesia. Situated on the island of Bali, Ubud exudes peace and tranquillity with lush rice terraces and mountains in the backdrop."
/>
</div>

    </div>
  );
}

export default Trip;