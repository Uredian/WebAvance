import '../App.css';

function addToCart(reference){

};

async function getProducts() {
    try {
        let res = await fetch("localhost:3001/products");
        return res;
    } catch (error) {
        console.error(error);
    }
};

function Product(product) {
    let object = product.product
    return (
        <div className="Product_list" id={object.reference}>
            <p>{object.titre}</p><br />
            <p>Description : {object.description}</p><br />
            <p>Prix : {object.prix}</p><br />
            <p>Quantité restante : {object.quantité}</p><br />
            <button onClick={()=>addToCart(object.reference)}>Ajouter au panier</button>
        </div>
    )
}

function Products() {
    //const products = getProducts();
    const products = [1, 1, 1, 1]
    const productsDisplay = products.map((product) => {
        return <Product product={{ titre: "Pizza test", description: "Ceci est un test", prix: "4euros" ,quantité:"3"}} />;
    })

    return (
        <div className="Nopage">
            <p>
                Here are our available pizzas :
            </p>
            <div className='Products'>
                {productsDisplay}
            </div>

        </div>
    );
}

export default Products;