import React from 'react';
import { Card } from 'react-bootstrap';

class CardComponent extends React.Component { 
    render() {
        return (
            <Card style={{height: '100%', width:'100%'}}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.img} style={{height: '20rem',  width: '20rem'}} />
                </Card.Body>
            </Card>
        )
    }
}

export default CardComponent;