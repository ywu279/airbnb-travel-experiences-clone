import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


const cards = data.map((item) => {
  return(
    <Card 
      status={item.status}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  )
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
