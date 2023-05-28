import UserForm from './UserForm';
import Order from './Order';
import Submit from './Submit';

export default function ShoppingCard() {
    return (
        <div className="basket">
            <UserForm />
            <Order />
            <Submit />
        </div>
    );
}