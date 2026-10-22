
import { AiOutlineProduct } from "react-icons/ai";
import loptopImg from "../assets/Images/laptop.jpg";
import "./Cards.css";

export const ProductCard = ({product, price, category }) => {

    return (
        <>
        <main className="demo-page product-page">
            <article className="demo-card product-card">
                <div className="product-image-wrap">
                    <img src={loptopImg} />
                    <span className="product-image-icon" aria-hidden="true">
                        <AiOutlineProduct />
                    </span>
                </div>
                <div className="product-details">
                    <p className="demo-eyebrow">Product details</p>
                    <h1>{product}</h1>
                    <div className="product-price">
                        <span>Price</span>
                        <strong>{price}</strong>
                    </div>
                </div>
            </article><br></br>     

            <article className="demo-card product-card">
                <div className="product-image-wrap">
                    <img src={loptopImg} />
                    <span className="product-image-icon" aria-hidden="true">
                        <AiOutlineProduct />
                    </span>
                </div>
                <div className="product-details">
                    <p className="demo-eyebrow">Product details</p>
                    <h1>{product}</h1>
                    <div className="product-price">
                        <span>Price</span>
                        <strong>{price}</strong>
                    </div>
                </div>
            </article><br></br>        
        </main>
         </>
    );
};
