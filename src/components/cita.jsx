import React from 'react'
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Cita = ( { cita, toggleActivo } ) => {

    const {nombreDueno, nombreMascota, descripcion, fecha, hora, fechaActual, horaActual, id} = cita

    const hola = () => { 
        const horaTemp = horaActual;
        const split = horaTemp.split(':' , 2)
        if(split[1] < 10){
            return `${split[0]}:0${split[1]}`
        }else{
            return horaTemp;
        }
    }

    return ( 
        <div 
            onClick={e => {
                toggleActivo(id);
            }}>
            <Row>
                <Col xs={ 12 } className="cita-container ">
                    <div className="cita py-2 px-4">
                        <div className="cita-header">
                            <Row>
                                <Col>
                                    Nombre del dueño:
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                    {nombreDueno}
                                </Col>
                            </Row>
                        </div>
                        <div className="separator"/>
                        <div className="cita-body">
                            <Row className="my-4">
                                <Col>
                                    Nombre de la mascota:
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                    {nombreMascota}
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    Hora de la cita: 
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                    {hora}
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    Fecha de la cita:  
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                    {fecha}
                                </Col>
                            </Row>
                            <Row className="my-4 descripcion-cita">
                                <Col>
                                    Descripcion:  
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                    {descripcion}
                                </Col>
                            </Row>
                            <Row className="cita-footer">
                                <Col>
                                    
                                </Col> 
                                <Col className="d-flex justify-content-end">
                                {fechaActual} {hola()}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
     );
}

Cita.protoTypes = {
    cita: PropTypes.object.isRequired,
    toggleActivo : PropTypes.func.isRequired
};
 
export default Cita;