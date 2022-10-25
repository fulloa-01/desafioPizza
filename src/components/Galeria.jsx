import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Context from '../Contex';
import {Card, Button, ListGroup} from 'react-bootstrap';
import "../assets/css/Galeria.css"

export default function Home() {

    const { pizza, setDetallePizza, carrito, setCarritto } = useContext(Context);
    const navigate = useNavigate();

    const verMas = (id) => {

        navigate(`/pizza/${id}`);

    }

    const añadirPizza = (e) =>{

        setCarritto([...carrito, e]);
    }

    return (

        <div className='form-cont-pizzas'>
            <div className='galeria grid'>
                {pizza.map((e) => (
                    <Card key={e.id} style={{ width: '18rem' }}>
                    <Card.Img className="" variant="top" src={e.img} />
                    <Card.Body>
                        <Card.Title><h2>{e.name.toUpperCase()}</h2></Card.Title>
                        <br />
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item ></ListGroup.Item>
                            <b>Ingredientes:</b>
                            <ListGroup.Item >🍕{e.ingredients[0]}</ListGroup.Item>
                            <ListGroup.Item >🍕{e.ingredients[1]}</ListGroup.Item>
                            <ListGroup.Item >🍕{e.ingredients[2]}</ListGroup.Item>
                            <ListGroup.Item >🍕{e.ingredients[3]}</ListGroup.Item>
                        </ListGroup>
                        <br />
                        <Button variant="primary" onClick={() => (verMas(e.id))}>Ver mas 👀</Button>
                        <Button variant="info" onClick={() => ( añadirPizza(e))}>Añadir 🛒</Button>
                        <br />
                        
                    </Card.Body>
                </Card>
                        
                               
                    
                ))}
            
        </div></div>
    )
}