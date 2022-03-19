import '../App.css';
import { useCookies} from "react-cookie";

function Order() {
  const [cookies,setCookie,removeCookie] = useCookies("cart");
  for (let val in cookies){
    removeCookie(val);
  }
  return (
    <div className="OrderPage">
    <p>
        Please complete the following form to help us deliver your pizzas !<br/>
    </p>
    <form className='orderForm'>
        <label for="lastname">Last Name :</label><br/>
        <input type="text" id="lastname" name="lastname"></input><br/><br/>
        <label for="firstname">First Name :</label><br/>
        <input type="text" id="firstname" name="firstname"></input><br/><br/>
        <label for="email">Email :</label><br/>
        <input type="text" id="email" name="email"></input><br/><br/>
        <label for="num">Address Number :</label><br/>
        <input type="text" id="num" name="num"></input><br/><br/>
        <label for="address">Address :</label><br/>
        <input type="text" id="address" name="address"></input><br/><br/>
        <label for="city" >City :</label><br/>
        <input type="text" id="city" name="city"></input><br/><br/>
        <label for="postal">Postal Code :</label><br/>
        <input type="text" id="postal" name="postal"></input><br/><br/>
        <input type="submit" value="Submit Information"></input>
    </form>

</div>
  );
}

export default Order;