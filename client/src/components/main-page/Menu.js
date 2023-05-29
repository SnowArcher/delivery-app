import MenuItem from './MenuItem';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Menu() {
    const src = 'http://localhost:5000/api/food'
    const [food, setFood] = useState([])
    useEffect(() => {
        axios.get(src).then(data => {
            setFood(data.data)
        })
    }, [])
    return (
        <div className="menulist">
            {
                food.map((food, index) => {
                    return <MenuItem key={index} name={food.name} description={food.description} price={food.price} img={food.img}/>           
                })
            }
        </div>
    );
}