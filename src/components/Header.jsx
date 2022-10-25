import "../assets/css/Header.css"

import imgpizza from "../assets/img/pizza_banner.jpeg"

export default function Header(){
    return(
      <div className="header">
        <div className='form-cont-img-home'>
          <img className="form-img-home" src={imgpizza} alt=""></img>
        </div>
        <div className="form-con-texto">
          <h1>Pizería Mamma Mia!</h1>
          <h3>Tenemos las mejores pizzas que podrás encontrar!!</h3>
        </div>
      </div>

    )
}