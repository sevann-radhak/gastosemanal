import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPrespuesto';

class App extends Component {
  // State
  state = {
    gastos: {},
    presupuesto: '',
    restante: ''
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }
  obtenerPresupuesto() {
    let presupuesto = prompt('Cuál es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);

    if (resultado) {
      this.setState({
        presupuesto,
        restante: presupuesto
      })
    }
    else {
      this.obtenerPresupuesto();
    }
  }

  // Agregar gasto al state
  agregarGasto = gasto => {
    // Tomar una copia del state actual
    const gastos = { ...this.state.gastos };

    // Agregar el gasto al objeto del state
    gastos[`gasto ${Date.now()}`] = gasto;

    // Restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);

    // Ponerlo en state
    this.setState({
      gastos
    })
  }

  // Restar del presupuesto el gasto creado
  restarPresupuesto = cantidad => {
    // Leer el gasto
    let restar = Number(cantidad);

    // Copia del state actual
    let restante = this.state.restante;

    // Restar
    restante -= restar;

    // Volvemos a combertirlo a string
    restante = String(restante);

    // Actualizar estado
    this.setState({
      restante
    })
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto Semanal' />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos} />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
