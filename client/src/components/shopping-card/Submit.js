import { useSelector } from 'react-redux';

export default function Order() {
    const order = useSelector(state => state.cart)
    let sum = 0;
    order.forEach(item => {
        sum += item.price * item.value;
    });
    return (
        <div className="submit">
            <p>{`Total price: ${sum} UAH`}</p>
            <button>Submit</button>
        </div> 
    );
}