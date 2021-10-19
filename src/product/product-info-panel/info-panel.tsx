import { useState } from "react";
import './info-panel.scss';
import cartIcon from '../../assets/icon-cart.svg';

function InfoPanel() {

    const [quantity, setQuantity] = useState<number>(0);

    function decrement(quantity: number) {
        if (quantity === 0) {
            setQuantity(0);
        } else {
            setQuantity(quantity - 1);
        }
    }


    return (
        <div id="info-panel-container">
            <div id="inner-info-container">
                <h5>Sneaker Company</h5>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <span id="price-group">
                    <h5 id="sales-price">$125.00</h5>
                    <h5 id="percentage-off">50%</h5>
                </span>
                <h5>$250.00</h5>
                <span id="button-group">
                    <span id="quantity-group">
                        <button id="decrement" onClick={() => decrement(quantity)}>-</button>
                        <p>{quantity}</p>
                        <button id="increment" onClick={() => setQuantity(quantity + 1)}>-</button>
                    </span>
                    <span id="cart-group">
                        <button id="add-to-cart"><img src={cartIcon} alt="shopping cart icon" />Add to cart</button>
                    </span>

                </span>
            </div>

        </div>
    );
}

export default InfoPanel;