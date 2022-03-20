import '../App.css';
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function Order() {
    const [cookies, removeCookie] = useCookies("cart");

    function redirect() {
        alert("Commande traitée !");
        window.location.href = "/"
    }

    function createProductList() {
        let json = {}
        for (let cookie in cookies) {
            if (!isNaN(cookies[cookie])) {
                json[cookie] = cookies[cookie];
            }
        }
        json = JSON.stringify(json);
        return json;
    }

    function removeCookies() {
        for (let val in cookies) {
            removeCookie(val);
        }
    };

    useEffect(() => { return removeCookies() });

    return (
        <div className="OrderPage">
            <p>
                Please complete the following form to help us deliver your pizzas !<br />
            </p>
            <iframe name='dummyFrame' id='dummyFrame' title='dummyFrame'></iframe>
            <form className='orderForm' method='POST' action='http://localhost:3001/users/create' id='orderForm' target='dummyFrame'>
                <label htmlFor="Nom">Last Name :</label><br />
                <input type="text" id="Nom" name="Nom"></input><br /><br />
                <label htmlFor="Prenom">First Name :</label><br />
                <input type="text" id="Prenom" name="Prenom"></input><br /><br />
                <label htmlFor="Email">Email :</label><br />
                <input type="text" id="Email" name="Email"></input><br /><br />
                <label htmlFor="Adresse_numero">Address Number :</label><br />
                <input type="text" id="Adresse_numero" name="Adresse_numero"></input><br /><br />
                <label htmlFor="Adresse_rue">Address :</label><br />
                <input type="text" id="Adresse_rue" name="Adresse_rue"></input><br /><br />
                <label htmlFor="Ville" >City :</label><br />
                <input type="text" id="Ville" name="Ville"></input><br /><br />
                <label htmlFor="Code_postal">Postal Code :</label><br />
                <input type="text" id="Code_postal" name="Code_postal"></input><br /><br />
                <input type="hidden" id='ListeProduits' name='ListeProduits' value={createProductList()} />
                <input type="submit" value="Submit Information" onClick={() => redirect()}></input>
            </form>
        </div>
    );
}

export default Order;