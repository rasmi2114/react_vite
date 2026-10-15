import { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './App.css';
import { Greeting } from './components/Greeting';
import { StudentCard } from './components/StudentCard';
import { ProductCard } from './components/ProductCard';

export const App = () => {

   const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Mobile", price: 500, category: "Electronics" },
    { id: 3, name: "Headphones", price: 100, category: "Accessories" },
  ];

  const navigate = useNavigate(); 

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
        <div className='products-grid'>
          {products.map ((product) => (
            <ProductCard key={product.id}
            product={product.name}
            price={product.price}
            category={product.category} 
            />
          ))};
        </div>
        <StudentCard name="Alok" age="43" marks="89%" />
        
      </section>
    </main>
  );
};