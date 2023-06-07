import OrderItem from "./OrderItem";
import { useSelector } from 'react-redux';

export default function Order() {
    const order = useSelector(state => state.cart)
    return (
        <div className="order">
            {
                order.length > 0 ?
                order.map((item, index) => {
                    return <OrderItem key={index} name={item.name} price={item.price} img={item.img} value={item.value}/>
                }) : `Cart is empty`
                
            }
        </div>   
    );
}