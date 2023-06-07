import axios from 'axios';
import {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';

export default function Shop() {
    const src = 'http://localhost:5000/api/shop'
    const [shops, setShops] = useState([])
    useEffect(() => {
        axios.get(src).then(data => {
            setShops(data.data)
        })
    }, [])
    const dispatch = useDispatch()
    const changeShop = (activeshop) => {
        dispatch({type:"CHANGE_SHOP", shop: activeshop})
    }
    return (
        <div className="shoplist">
            <h1>Shops:</h1>
            <ul >
                {
                    shops.map((shop, index) => {
                        return (
                            <li key={index} onClick={() => {changeShop(shop.id)}}>{shop.name}</li>
                        );
                    })
                }
            </ul>
        </div>
        
    );
}