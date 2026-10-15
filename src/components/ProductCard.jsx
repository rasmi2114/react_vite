// import { useLocation } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import loptopImg from "../assets/Images/laptop.jpg";
import "./Cards.css";

export const ProductCard = ({product, price, category}) => {

    // const {state} = useLocation ();
    // const {product, price} = state || {};
    
    return (
        <main className="demo-page product-page">
            <article className="demo-card product-card">
                <div className="product-image-wrap">
                    <img src={loptopImg} alt={product} />
                    <span className="product-image-icon" aria-hidden="true">
                        <AiOutlineProduct />
                    </span>
                </div>
                <div className="product-details">
                    <p className="demo-eyebrow">Product details</p>
                    <h1>{category}</h1>
                    <div className="product-items">
                    <span>Product</span>
                    <strong>{product}</strong>
                    </div>
                    <div className="product-price">
                        <span>Price</span>
                        <strong>{price}</strong>
                    </div>
                </div>
            </article>
        </main>
    );
};
