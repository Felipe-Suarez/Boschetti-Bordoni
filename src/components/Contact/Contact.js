import React from 'react';
import { useState } from 'react';


//falta handleSubmit.
//logica de envio.
//estilos.


const Contact = () => {
  return (
    <form>
        <input
            type='text'
            placeholder='Nombre y Apellido'
        />
        <input
            type='email'
            placeholder='Email'
        />
        <textarea
            placeholder='Mensaje'
            name='message'
        />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Contact;