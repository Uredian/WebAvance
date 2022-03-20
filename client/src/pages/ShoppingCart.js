import '../App.css';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';



function ShoppingCart() {

    function CartItem(props) {
        let object = props.product;
        return (
            <div className="Product_list" id={object.Reference}>
                <p>{object.Titre}</p><br />
                <img src={object.Image} alt={object.Titre} />
                <p>Description : {object.Description}</p><br />
                <p>Prix total : {parseInt(object.Prix) * parseInt(props.cartQuantity)}</p><br />
                <p className='Quantity' id={object.Reference}>Quantité dans le panier : {props.cartQuantity}</p><br />
            </div>
        )
    }

    const [cookies] = useCookies("cart");
    const [productsInCart, setProductsInCart] = useState([]);

    async function getProductsinCart() {
        let tab = []
        for (let product in cookies) {
            if (!isNaN(cookies[product])) {
                let prod = await fetch("http://localhost:3001/products/" + product);
                prod = await prod.json();
                tab.push(prod[0]);
            }
        }
        setProductsInCart(tab);
    }

    useEffect(() => { getProductsinCart() }, []);

    return (
        <div className="ProductsPage">
            <p>
                Shopping Cart :
            </p>
            <div className='Products'>
                <div className='CartItems'>
                    {productsInCart.map((product) => {
                        return <CartItem key={product.Reference} product={product} cartQuantity={cookies[product.Reference]} />
                    })}
                </div>
            </div>
            <form action="/order">
                <input type="submit" className="paymentButton" value="Proceed to payment" />
            </form>
        </div>
    );
}

export default ShoppingCart;