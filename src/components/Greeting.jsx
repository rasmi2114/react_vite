import { useLocation } from "react-router-dom";
import { ImUsers } from "react-icons/im";
import "./Cards.css";

export const Greeting = () => {
    const {state} = useLocation();
    const {Name} = state || {};

  return (
    <main className="demo-page greeting-page">
      <article className="demo-card greeting-card">
        <span className="demo-icon greeting-icon" aria-hidden="true">
          <ImUsers />
        </span>
        <p className="demo-eyebrow">A warm welcome</p>
        <h1>User Greeting</h1>
        <p className="greeting-message">{Name || "Hello, welcome!"}</p>
      </article>
       <article className="demo-card greeting-card">
        <span className="demo-icon greeting-icon" aria-hidden="true">
          <ImUsers />
        </span>
        <p className="demo-eyebrow">A warm welcome</p>
        <h1>User Greeting</h1>
        <p className="greeting-message">{Name || "Hello, welcome!"}</p>
      </article>
    </main>
  );
};
