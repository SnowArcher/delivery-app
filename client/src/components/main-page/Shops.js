import axios from 'axios';

export default function Shop() {
    const getShops = () => {
        axios.get('http://localhost:5000/api/shop').then( res =>
        {
            console.log(res.data)
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
    const shops = getShops();
    return (
        <div className="shoplist">
            <h1>Shops:</h1>
            <ul >
                <li>
                    McDonalds
                </li>
                <li>
                    KFC
                </li>
                <li>
                    БАГАТО ЛОСОСЯ
                </li>
            </ul>
        </div>
        
    );
}