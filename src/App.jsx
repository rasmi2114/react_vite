import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

export const App = () => {

  const navigate = useNavigate(); 
  const [selectedComponent, setSelectedComponent] = useState('');

  //create array of obejectswith name and path of each components
   const components = [
    {
      name: "Greeting",
      path: "/greeting",
      props: { Name: "Hello, Alok! Gud Abend" },
    },
    {
      name: "ProductCard",
      path: "/productcard",
      props: { product: "Laptop", price: 500 },
    },
    {
      name: "StudentCard",
      path: "/studentcard",
      props: { Name: "Alok", age: "40", Marks: "80%" },
    },
  ];

  return (
    <main className="home-page">
      <section className="home-content" aria-labelledby="home-title">
        <h1 id="home-title">Your home page</h1>
        <p className="home-description">Choose a component to view.</p>

        <div className="component-buttons" aria-label="Components">
          {components.map((component) => (
            <button
              className="component-button"
              type="button"
              key={component}
              aria-pressed={selectedComponent === component}
              onClick={() => 
                navigate(component.path,{
                state:component.props,
              }) }
            >
              {component.name}
            </button>
          ))}
        </div>

        {selectedComponent && (
          <p className="selection-status" role="status">
            {selectedComponent} selected
          </p>
        )}
      </section>
    </main>
  );
};