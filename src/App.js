import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import katie_zaferes from './images/katie-zaferes.png'
import wedding_photography from './images/wedding-photography.png'
import mountain_bike from './images/mountain-bike.png'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">
        <Card
          status="SOLD OUT"
          img={katie_zaferes} 
          rating="5.0"
          review="6"
          location="USA"
          info="Life lessons with kaite Zaferes"
          price="136"
        />
        <Card 
          status="ONLINE"
          img={wedding_photography} 
          rating="5.0"
          review="30"
          location="USA"
          info="Learn wedding photography"
          price="125"
        />
        <Card 
          img={mountain_bike} 
          rating="4.8"
          review="2"
          location="USA"
          info="Group Mountain Biking"
          price="50"
        />
      </section>
    </div>
  );
}

export default App;
