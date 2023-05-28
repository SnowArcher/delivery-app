import MenuItem from './MenuItem';
import axios from 'axios';

export default function Menu() {
    const getFood = () => {
        axios.get('http://localhost:5000/api/food').then( res =>
        {
            console.log(res.data)
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
    const food = getFood();
    return (
        <div className="menulist">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    );
}