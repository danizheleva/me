import React from 'react';
import { Card } from 'react-bootstrap';

class CardComponent extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.img} style={{height: '11rem'}} />
                </Card.Body>
            </Card>
        )
}
}

export default CardComponent;