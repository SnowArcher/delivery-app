import {useState} from 'react';

export default function OrderItem() {
    const [count, setCount] = useState("1");
    return (
            <div className="order_item">
                <img src="../img/mcdonalds/Sdwch_Hamburger product-header-desktop.jpg" alt="food"/>
                <div className="count">
                    <h1>Гамбургер</h1>
                    <p>Price: </p>
                    <input type="number" value={count} onChange={event => setCount(event.target.value)} min="1"/>
                </div>
            </div>
    );
}