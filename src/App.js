import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import { Row, Col } from 'react-bootstrap'
import Cita from './components/cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = []
  }

  const [citas, setCitas] = useState(citasIniciales);

  const [idActivo, setIdActivo] = useState('')

  const [activo, setActivo] = useState(false);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  })

  const crearCita = ( cita ) => {
    setCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = ( id ) => {
    const citasActualizadas = citas.filter( e => e.id !== id);
    setCitas(citasActualizadas);
    setActivo( !activo );
  }

  const toggleActivo = (id) => {
    if(!activo){
      setActivo( !activo );
      setIdActivo( id )
    }
  }

  if(!activo){
    
    return (
      <div className="App">
        <div className="bg-black">
          <div className="container-citas container">
            <Row className="row-container">
              <Col 
                lg={ 5 } 
                className="mb-5">
                <Form
                  crearCita={ crearCita }/>
              </Col>
              <Col lg={ 1 }/>
              <Col 
                lg={ 6 } 
                className="overflow-auto citas-col" 
                style={{height:'68vh'}}>
                <h1 style={{color : 'white'}} className="my-4">
                  CITAS
                </h1>
                {
                  citas.map(
                    cita => 
                      <Cita 
                        key={ cita.id } 
                        cita={ cita } 
                        toggleActivo={ toggleActivo } />)
                }
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );

  } else {

    return (
      <div className="App">
        <div className="alert-container">
          <div className="alert-body-container ">
            <div className="alert-body">
              <h3 style={{color:'white', fontSize:'16px'}} className="text-center">¿Esta seguro que quiere eliminar la cita?</h3>
              <Row className="mt-3">
                <Col>
                  <div className="bg-si" onClick={ () => eliminarCita( idActivo ) }>Sí</div>
                </Col>
                <Col>
                  <div className="bg-no" onClick={ () => { setIdActivo( '' ); setActivo(false) } } >No</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container-citas container">
            <Row className="row-container">
              <Col lg={ 6 } className="mb-5">
                <Form
                  crearCita={ crearCita }/>
              </Col>
              <Col lg={ 1 }/>
              <Col lg={ 5 } className="overflow-auto citas-col" style={{height:'68vh'}}>
                <h1 style={{color : 'white'}} className="my-4">CITAS</h1>
                {citas.map(cita => <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />)}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
