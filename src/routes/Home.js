import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
    return (
<>
<Navbar/>
<Hero 
cName="hero"
heroImg="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
title="Your Journey Your Story"
text="Choose Your Favourite Destination."
buttonText="Travel Plan"
url="/"
btnClass="show"
/>
<Destination />
<Trip />
<Footer />
</>


    )
}
export default Home;