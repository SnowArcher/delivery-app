import {useDispatch} from 'react-redux';

export default function Menu({name, description, price, img}) {
    const src = 'http://localhost:5000/'
    const dispatch = useDispatch()
    let value = 1
    const addToCart = ({name, price, img, value}) => {
        dispatch({type:"ADD_TO_CART", item: {name, price, img, value}})
    }
    return (
        <div className="menulist_item">
            <img src={src + img} alt="food"/>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="price-row">
                <p>{`price: ${price} UAH`}</p>
                <button onClick={() => {addToCart({name, price, img, value})}}>add to Card</button>
            </div>
        </div>
    );
}