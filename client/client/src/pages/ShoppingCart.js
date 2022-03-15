import '../App.css';
import { useCookies } from 'react-cookie';

function ShoppingCart() {
    const [cookies,setCookie] = useCookies("cart");
    const values = JSON.stringify(cookies)
    return (
        <div className="Nopage">
            <p>
                Shopping Cart :
            </p>
            <div className='shoppingcart'>
                <p>{values}</p>
            </div>
            <form action="/">
                    <input type="submit" value="Proceed to payment" />
                </form>
        </div>
    );
}

export default ShoppingCart;