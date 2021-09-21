import React, { useState } from 'react';
import Input from './Input';
import * as Service from '../services';

export default function Formulario() {

    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');

    const [msg, setMsg] = useState('');

    const handleName = ({ target: { value } }) => {
        setName(value);
    }

    const handleDocumento = ({ target: { value } }) => {
        setDni(value);
    }

    const handleMail = ({ target }) => {
        setMail(target.value);
    }

    const handleTelefono = (e) => {
        setTel(e.target.value);
    }

    const enviarDatos = async () => {
        let { msg, code } = await Service.guardar(name);
        setMsg(msg);
    }

    return (
        <div className="form">
            <p>{msg}</p>
            <Input etiqueta='Nombre y apellido' tipo='text' funcion={handleName} labelColor='red' />
            <Input etiqueta='Documento' tipo='text' funcion={handleDocumento} />
            <Input etiqueta='Mail' tipo='email' funcion={handleMail} />
            <Input etiqueta='Teléfono' tipo='tel' funcion={handleTelefono} />
            <button onClick={enviarDatos}>Enviar</button>
        </div>
    );
}