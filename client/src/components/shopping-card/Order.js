import OrderItem from "./OrderItem";

export default function Order() {
    return (
        <div className="order">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>   
    );
}