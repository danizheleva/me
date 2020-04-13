import React from 'react';
import '../App.css';

class CapitalisedTitle extends React.Component {
    render() {
        switch(this.props.size) {
            case 1:
                return (<h1 className="card-title">{this.props.title}</h1>)
            case 2:
                return (<h2 className="card-title">{this.props.title}</h2>)
            case 3:
                return (<h3 className="card-title">{this.props.title}</h3>)
            case 4:
                return (<h4 className="card-title">{this.props.title}</h4>)
            default:
                return (<h4 className="card-title">{this.props.title}</h4>)
        } 
    }
}

export default CapitalisedTitle;