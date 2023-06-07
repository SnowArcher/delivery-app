import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

export default function OrderItem({name, price, img, value}) {
    const [count, setCount] = useState(value? value: 1);
    const src = 'http://localhost:5000/'
    const dispatch = useDispatch()
    useEffect(() => {
        const changeValue = ({ name, count }) => {
          dispatch({ type: 'CHANGE_VALUE', order: { name, count } });
        };
        changeValue({ name, count });
      }, [count, dispatch, name]);
    return (
            <div className="order_item">
                <img src={src + img} alt="food"/>
                <div className="count">
                    <h1>{name}</h1>
                    <p>{`Price: ${price} UAH`}</p>
                    <input 
                        type="number" 
                        value={count} 
                        onChange={event => {
                            const inputValue = event.target.value;
                            if (/^\d+$/.test(inputValue) && !inputValue.startsWith('0')) {
                                setCount(inputValue);
                            }
                        }} 
                        pattern="[0-9]*"
                        min="1"/>
                </div>
            </div>
    );
}