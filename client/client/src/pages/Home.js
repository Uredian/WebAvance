import '../App.css';
import { useCookies} from "react-cookie";
import cat from '../pizza_cat.png';
function Home() {
  const [cookies,removeCookie] = useCookies("cart");
  for (let val in cookies){
    removeCookie(val);
  }
  return (
    <div className="HomePage">
      <img src={cat} alt="Pizza cat"/>
    <p>
      Welcome to Pizza Loca ! <br/> We deliver the world's best pizzas, try some out and experience the tastiest pizzas ever ! <br/>
      Go to the Products page to see what could make your wishes come true :)
    </p>

</div>
  );
}

export default Home;