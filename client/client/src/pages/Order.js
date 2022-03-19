import '../App.css';
import { useCookies } from "react-cookie";

function Order() {
    const [cookies, removeCookie] = useCookies("cart");
    function redirect() {
        alert("Commande traitée !");
        window.location.href = "/"
    }
    var render = (
        <div className="OrderPage">
            <p>
                Please complete the following form to help us deliver your pizzas !<br />
            </p>
            <iframe name='dummyFramed' id='dummyFramed'></iframe>
            <form className='orderForm' method='POST' action='http://localhost:3001/utilisateurs/create' id='orderForm' target='dummyFramed'>
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
                <input type="hidden" id='ListeProduits' name='ListeProduits' value={cookies}/>
                <input type="submit" value="Submit Information" onClick={()=>redirect()}></input>
            </form>
        </div>
    );
    for (let val in cookies) {
        removeCookie(val);
    }
    return render;
}

export default Order;