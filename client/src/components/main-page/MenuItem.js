export default function Menu({name, description, price, img}) {
    const src = 'http://localhost:5000/'
    return (
        <div className="menulist_item">
            <img src={src + img} alt="food"/>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="price-row">
                <p>{`price: ${price} UAH`}</p>
                <button>add to Card</button>
            </div>
        </div>
    );
}