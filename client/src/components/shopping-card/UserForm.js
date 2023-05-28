export default function UserForm() {
    return (
        <div className="userform">
            <form>
                <p>Name:</p>
                <input type="text"/>
                <p>Email:</p>
                <input type="email"/>
                <p>Phone:</p>
                <input type="tel"/>
                <p>Adress:</p>
                <input type="text"/>
            </form>
        </div>
        
    );
}