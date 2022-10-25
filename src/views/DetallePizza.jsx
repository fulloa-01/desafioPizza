import { useContext } from 'react';
import Context from '../Contex';
import {Card, ListGroup,Button} from 'react-bootstrap';
import "../assets/css/DetallePizza.css"


export default function DetallePizza() {

  const { detallePizza } = useContext(Context);

  return (

    <div className="form-cont-card">
      <div className="form-cont-img-card">
        <Card.Img className="form-img-card" src={detallePizza.img} variant="top" />
      </div>
      <Card.Body className="form-body" >
        <Card.Title>{detallePizza.name}</Card.Title>
        <Card.Text>{detallePizza.desc}</Card.Text>
      
        <ListGroup className="list-group-flush">
          <ListGroup.Item >{detallePizza.ingredients}</ListGroup.Item>
        </ListGroup>
     
        <h3 className='form-titulo'>Precio: ${detallePizza.price}</h3>
        <Button variant="danger">Agregar 🛒</Button>
      </Card.Body>
    </div>

  )
}