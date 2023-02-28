import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';

const Posters = (props) => {
    const HanldOnclick = ()=>{

    }
  const  HandlOnChange = (e) =>{
    if(e.target.value.length < 10)
    console.log("you have to type at least 10 charecter")
    else 
    console.log(e.target.value)
  }
    return(       
        
        <div className="col-4 mb-4">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
        <Button onClick={HanldOnclick} variant="primary">Go somewhere</Button>
        <input onChange={HandlOnChange} className="p-2 m-2"/>
        </Card.Body>
        </Card> 
        </div>
    
        
    )
}
export default Posters;