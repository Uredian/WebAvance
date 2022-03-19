import { useEffect, useState } from 'react';
import '../App.css';
import { useCookies } from 'react-cookie';
function Products() {

    function Product(product) {
        let object = product.product
        const [cookies, setCookie] = useCookies(["cart"]);

        function addToCart(Reference) {
            let productIndex = products.findIndex((product) => product.Reference === Reference);
            const tab = [...products];

            if (cookies[Reference] === undefined || isNaN(cookies[Reference])) {
                setCookie(Reference, 1, { path: "/" });
            }
            else {
                let value = parseInt(cookies[Reference]);
                setCookie(Reference, value + 1, { path: "/" });
            }

            tab[productIndex].Quantite = tab[productIndex].Quantite - 1;
            setProducts(tab);
        };

        return (
            <div className="Product_list" id={object.Reference}>
                <p>{object.Titre}</p><br />
                <img src={object.Image}/>
                <p>Description : {object.Description}</p><br />
                <p>Prix : {object.Prix}</p><br />
                <p className='Quantity' id={object.Reference}>Quantité restante : {object.Quantite}</p><br />
                <button onClick={() => addToCart(object.Reference)}>Ajouter au panier</button>
            </div>
        )
    }

    async function getProducts() {

        try {
            let res = await fetch("http://localhost:3001/produits/a");
            res = await res.json()
            let products = [];
            for (let prod in res) {
                console.log(res[prod]);
                products.push(res[prod]);
            }
            console.log(products)
            return setProducts(products);
        } catch (error) {
            console.error(error);
        }
    };

    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts() }, []);

    return (
        <div className="ProductsPage">
            <p>
                Here are our available pizzas :
            </p>
            <div className='Products'>
                {products.map((product) => {
                    return <Product key={product.Reference} product={product} />
                })}
            </div>

        </div>
    );
}

export default Products;