import {Link} from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/basket">Shopping Cart</Link>
                </li>
            </ul>
        </nav>
    );
}