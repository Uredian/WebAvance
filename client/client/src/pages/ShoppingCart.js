import '../App.css';
import { useCookies } from 'react-cookie';

function CartItem(product,cartQuantity){
    let object = product.product;
    return (
        <div className="Product_list" id={object.reference}>
            <p>{object.titre}</p><br />
            <p>Description : {object.description}</p><br />
            <p>Prix : {parseInt(object.prix)*parseInt(cartQuantity)}</p><br />
            <p className='Quantity' id={object.reference}>Quantité dans le panier : {cartQuantity}</p><br />
        </div>
    )
}

async function ShoppingCart() {
    const [cookies,setCookie] = useCookies("cart");
    const values = JSON.parse(JSON.stringify(cookies));
    let productsInCart = []
    for(let product in values){
        productsInCart.push(await fetch("localhost:3001/produits/"+{product}));
    }


    return (
        <div className="ShoppingCartPage">
            <p>
                Shopping Cart :
            </p>
            <div className='shoppingcart'>
            <div className='CartItems'>
                {productsInCart.map((product) => {
                    return <CartItem key={product.reference} product={product} cartQuantity={cookies[product.reference]}/>
                })}
            </div>
            </div>
            <form action="/">
                    <input type="submit" value="Proceed to payment" />
                </form>
        </div>
    );
}

export default ShoppingCart;