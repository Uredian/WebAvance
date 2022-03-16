import { useState } from 'react';
import '../App.css';
import { useCookies } from 'react-cookie';
function Products() {
    function Product(product) {
        let object = product.product
        const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
        function addToCart(reference) {
            let productIndex = products.findIndex((product) => product.reference === reference);
            const tab = [...products];
            
            if (cookies[reference] === undefined) {
                setCookie(reference, 1, { path: "/" });
            }
            else {
                let value = parseInt(cookies[reference]);
                setCookie(reference, value + 1, { path: "/" });
            }

            tab[productIndex].quantite = tab[productIndex].quantite - 1;
            setProducts(tab);
            
        };
        return (
            <div className="Product_list" id={object.reference}>
                <p>{object.titre}</p><br />
                <p>Description : {object.description}</p><br />
                <p>Prix : {object.prix}</p><br />
                <p className='Quantity' id={object.reference}>Quantité restante : {object.quantite}</p><br />
                <button onClick={() => addToCart(object.reference)}>Ajouter au panier</button>
            </div>
        )
    }




    async function getProducts() {
        try {
            let res = await fetch("http://localhost:3001/produits/a");
            return setProducts(res);
        } catch (error) {
            console.error(error);
        }
    };
    //const products = getProducts();
    const [products, setProducts] = useState(0);
    getProducts();
    return (
        <div className="ProductsPage">
            <p>
                Here are our available pizzas :
            </p>
            <div className='Products'>
                {products.map((product) => {
                    return <Product key={product.reference} product={product} />
                })}
            </div>

        </div>
    );
}

export default Products;