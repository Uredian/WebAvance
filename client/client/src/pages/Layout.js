import logo from '../kawai_pizza.png';
import '../App.css';
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <form action="/">
                    <input type="submit" value=" Home page" />
                </form>
                <form action="/products">
                    <input type="submit" value=" Products page" />
                </form>
                <form action="/shoppingcart">
                    <input type="submit" value=" Shopping cart page" />
                </form>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className='App-body'>
            <Outlet />
            </div>
        </div>

    );
}

export default Layout;