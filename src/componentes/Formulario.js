import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioGasto extends Component {
    // Refs para el formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto = (e) => {
        // Prevenir el default
        e.preventDefault();

        // Crear el objeto de los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }

        // console.log(gasto);

        // Agregarlo y enviarlo
        this.props.agregarGasto(gasto);

        // Resetear el formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" ref={this.nombreGasto} type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" ref={this.cantidadGasto} type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>);
    }
}

FormularioGasto.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto; 