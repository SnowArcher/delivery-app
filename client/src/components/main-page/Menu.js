import MenuItem from './MenuItem';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ScrollToTop from './ScrollToTop';


export default function Menu() {
    const menulist = useSelector(state => state.menulist)
    const src = 'http://localhost:5000/api/food'
    const [food, setFood] = useState([])
    useEffect(() => {
        axios.get(src).then(data => {
            setFood(data.data)
        })
    }, [])
    const filtredMenu = food.filter(item => item.shopId === menulist)
    return (
        <div className="menulist">
            {
                filtredMenu.map((food, index) => {
                    return <MenuItem key={index} name={food.name} description={food.description} price={food.price} img={food.img}/>           
                })
            }
            <ScrollToTop />
        </div>
    );
}