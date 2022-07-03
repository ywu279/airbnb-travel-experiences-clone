import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


const cards = data.map((item) => {
  return(
    <Card
      key={item.id} //When using map(), each child in the data array should have a unique "key" prop. 
      // instead of writing bunch of code below, you could simply declare a property called "item" and pass it (as JS object) into Card component
      // openSpots={item.openSpots}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      item={item} 
      //OR spreading all of the properties of the item as separate props into the Card component
      //{...item} 
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
