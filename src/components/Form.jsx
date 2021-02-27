import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 } from 'uuid';
import PropsTypes from 'prop-types';

function FormComponent ({ crearCita }){

    const [cita, setCita] = useState({
        nombreDueno : '',
        nombreMascota : '',
        descripcion : '',
        fecha : '',
        hora : '',
        fechaActual : '',
        horaActual : '',
        id:''
    });


    const toggleChange = ( e ) => {
        const d = new Date();
        const createFecha = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
        const createHora = `${d.getHours()}:${d.getMinutes()}`

        setCita({
            ...cita,
            [e.target.name] : e.target.value,
            fechaActual : createFecha,
            horaActual : createHora
        })
    }

    const toggleSubmit = e => {
        e.preventDefault()
        setCita({
            ...cita,
            id: v4()
        })
        crearCita(cita);
        setCita({
            nombreDueno : '',
            nombreMascota : '',
            descripcion : '',
            fecha : '',
            hora : '',
            fechaActual : '',
            horaActual : '',
            id:''
        })
        
    }

    const {nombreDueno, nombreMascota, descripcion, fecha, hora} = cita

    return(
        <Form className="form" onSubmit={toggleSubmit}>
            <h1 style={{color: 'white'}} className="my-4 ">PROGRAMA LA <span className="span-cita">CITA</span></h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color: 'white'}}>Nombre completo del dueño</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingresa el nombre completo del dueño" 
                    name="nombreDueno"
                    onChange={toggleChange}
                    value={nombreDueno} 
                    required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color: 'white'}}>Nombre de la mascota</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingresa el nombre de la mascota"
                    name="nombreMascota"
                    onChange={toggleChange}
                    value={nombreMascota} 
                    required/>
            </Form.Group>

            <label 
                htmlFor="tiempo" 
                style={{color: 'white'}}>
                    Hora de la cita
            </label>
            <br />

            <input 
                type="time" 
                id="tiempo" 
                className="input-time mb-3"
                name="hora"
                onChange={toggleChange}
                value={hora}
                required/>

            <label 
                htmlFor="fecha" 
                style={{color: 'white'}}>
                    Fecha de la cita
            </label>
            <br />

            <input 
                type="date" 
                id="fecha" 
                className="input-date mb-3"
                name="fecha"
                onChange={toggleChange}
                value={fecha}
                required/>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color: 'white'}}>Descripción</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3}
                    name="descripcion"
                    onChange={toggleChange}
                    value={descripcion} 
                    required/>
            </Form.Group>
            <button type="submit" className="button-enviar">
                Enviar
            </button>
        </Form>
    )
}

FormComponent.propTypes = {
    crearCita : PropsTypes.func.isRequired
}

export default FormComponent;