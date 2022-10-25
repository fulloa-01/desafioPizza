import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css"

export default function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <Navbar className='form-cont-navbar' bg="" variant="">
            <div className='form-cont-nombre'>
                
                <NavLink className={setActiveClass} to="/">
                    <h4>
                       🍕 Pizería Mamma Mia!
                    </h4>
                </NavLink>
            </div>
            <div className='form-cont-carrito'>
                
                <NavLink className={setActiveClass} to="/carrito">
                   🛒 Carrito
                </NavLink>
            </div>
            
        </Navbar>

    )
}
