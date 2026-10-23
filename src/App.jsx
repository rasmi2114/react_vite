import './App.css';
import { Greeting } from './components/Greeting';
import { StudentCard } from './components/StudentCard';
import { ProductCard } from './components/ProductCard';

export const App = () => {
  return (
    <main className="home-page">
      <section className="home-content" aria-labelledby="home-title">
        <h1 id="home-title">Your home page</h1>
        <p className="home-description">Choose a component to view.</p>

        {/* <div className="component-buttons" aria-label="Components">
          <NavLink to='/greeting'>Greeting</NavLink>
          <NavLink to='/productcard'>ProductCard</NavLink>
          <NavLink to='/studentcard'>StudentCard</NavLink>
        </div> */}
        
        <Greeting name='Hello Alok!'/>

         {/* StudentCard multiple data */}
        <section className="student-grid" aria-label="Products">
        <StudentCard name="Alok" age="43" marks="89%" />
        <StudentCard name="Rashmi" age="39" marks="99%" />
        <StudentCard name="Soni" age="43" marks="98%" />
        </section>

        {/* productcard multiple data */}
        <section className="products-grid" aria-label="Products">
        <ProductCard product="Laptop" price={80000} category="Electronics" />
        <ProductCard product="Mobile" price={5000} category="Electronics" />
        <ProductCard product="Headphones" price={1000} category="Accessories" />
        </section>
        
      </section>
    </main>
  );
};