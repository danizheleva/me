import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

class CardComponent extends React.Component { 
    render() {
        return (
            <Card style={{height: '100%', width:'100%'}}>
                <Card.Body>
                    <Card.Title className="card-title">{this.props.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.img}/>
                </Card.Body>
            </Card>
        )
    }
}

export default CardComponent;