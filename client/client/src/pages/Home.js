import '../App.css';
import { useCookies} from "react-cookie";
import cat from '../pizza_cat.png';
function Home() {
  const [cookies,setCookie,removeCookie] = useCookies("cart");
  //let values = JSON.parse(cookies);
  for (let val in cookies){
    removeCookie(val);
  }
  return (
    <div className="HomePage">
      <img src={cat}/>
    <p>
      Welcome to Pizza Loca ! <br/> We deliver the world's best pizzas, try some out and experience the tastiest pizzas ever ! <br/>
      Go to the Products page to see what could make your wishes come true :)
    </p>

</div>
  );
}

export default Home;