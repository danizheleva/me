import React from 'react';
import { Card } from 'react-bootstrap';
import { CapitalisedTitle} from '../components';
class CardComponent extends React.Component { 
    render() {
        return (
            <Card style={{height: '100%', width:'100%'}}>
                <Card.Body>
                    <Card.Title >
                        <CapitalisedTitle 
                            title={this.props.title}
                            size={4} />
                    </Card.Title>
                    <Card.Img variant="top" src={this.props.img}/>
                </Card.Body>
            </Card>
        )
    }
}

export default CardComponent;