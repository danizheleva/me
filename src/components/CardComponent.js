import React from 'react';
import {Card, Button} from 'react-bootstrap';
import baking from '../images/homepage/baking.jpg'

class CardComponent extends React.Component {
    render() {
        return (
            <Card style={{height: '30rem', width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        )
}
}

export default CardComponent;