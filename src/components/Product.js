import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    
    render() {
        return (
            <div className="product">
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.producer}</li>
                    <li>{this.props.color}</li>
                    <li>{this.props.weight}</li>
                </ul>
            </div>
        )
    }
}

Product.defaultProps = {
    hasWatermark: false
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    color: PropTypes.oneOf([
        'white', 
        'eggshell-white', 
        'salmon'
      ]).isRequired,
    hasWatermark: PropTypes.bool,
    weight: (props, propName) => {
        const weight = props[propName];

        if (weight === undefined) {
            return new Error('Weight is required');
        } else if (isNaN(weight)){
            return new Error('Weight should be a number');
        } else if (weight < 80 || weight > 300) {
            return new Error('Weight should be between 80 and 300');
        }
    }
}