import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component {
    render() {
        return (
            <div className="alert alert-primary"> Presupuesto: $ {this.props.presupuesto}
            </div>);
    }
}

Presupuesto.propTyes = {
    presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;