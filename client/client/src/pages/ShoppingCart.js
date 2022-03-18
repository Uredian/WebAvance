import '../App.css';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';



function ShoppingCart() {

    function CartItem(props) {
        let object = props.product;
        return (
            <div className="Product_list" id={object.Reference}>
                <p>{object.Titre}</p><br />
                <img src={object.Image}/>
                <p>Description : {object.Description}</p><br />
                <p>Prix total : {parseInt(object.Prix) * parseInt(props.cartQuantity)}</p><br />
                <p className='Quantity' id={object.Reference}>Quantité dans le panier : {props.cartQuantity}</p><br />
            </div>
        )
    }

    const [cookies, setCookie] = useCookies("cart");
    const [productsInCart,setProductsInCart] = useState([]);

    async function getProductsinCart() {
        let tab = []
        for (let product in cookies) {
            let prod = await fetch("http://localhost:3001/produits/"+product);
            prod = await prod.json();
            tab.push(prod[0]);
        }
        setProductsInCart(tab);
    }

    useEffect(()=>{getProductsinCart()},[]);

    return (
        <div className="ProductsPage">
            <p>
                Shopping Cart :
            </p>
            <div className='Products'>
                <div className='CartItems'>
                    {productsInCart.map((product) => {
                        return <CartItem key={product.Reference}  product={product} cartQuantity={cookies[product.Reference]} />
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