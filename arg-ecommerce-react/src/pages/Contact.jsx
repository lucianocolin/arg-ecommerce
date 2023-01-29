import React from 'react';
//hooks
import { useState } from 'react';
//react-bootstrap
import { Form, Button } from 'react-bootstrap';
//css
import '../css/Contact.css';

const Contact = () => {

  const initialFormValues = {
    name: '',
    lastname: '',
    country: '',
    mail: '',
    phone: 0
  }
  
  const [form, setForm] = useState(initialFormValues)
  const [errorMsg, setErrorMsg] = useState(null);

  const { name, lastname, country, mail, phone } = form;

  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleFocus = () =>{
    setErrorMsg(null);
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if (name === '' || lastname === '' || country === '' || mail === '' || phone === 0){
      setErrorMsg('Todos los campos son obligatorios');
      return;
    }
    setErrorMsg(null);
    setForm(initialFormValues);
    console.log(form);
  }
  
  return (
    <>
      <h1 className='contact-main-title'>HOLA, Usuario!</h1>
      <h4 className='contact-second-title'>
        Dejanos tus datos para que podamos contactarnos
        con vos!</h4>
      <Form className='contact-form' onSubmit={handleSubmit} >
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className='contact-form-input'
            type='name'
            placeholder='Colocá tus nombres'
            name='name'
            value={name}
            onChange={handleChange}
            onFocus={handleFocus}  >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            className='contact-form-input'
            type='lastname'
            placeholder='Colocá tus apellidos'
            name='lastname'
            value={lastname}
            onChange={handleChange}
            onFocus={handleFocus}  >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>País</Form.Label>
          <Form.Select
            className='contact-form-input'
            type='country'
            placeholder='¿En qué país estas?'
            name='country'
            value={country}
            onChange={handleChange}
            onFocus={handleFocus}  >
              <option value="">--¿En qué país estás?--</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="ecuador">Ecuador</option>
              <option value="peru">Perú</option>
              <option value="uruguay">Uruguay</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Mail</Form.Label>
          <Form.Control
            className='contact-form-input'
            type='mail'
            placeholder='Colocá tu correo electrónico'
            name='mail'
            value={mail}
            onChange={handleChange}
            onFocus={handleFocus}  >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            className='contact-form-input'
            type='phone'
            name='phone'
            value={phone}
            onChange={handleChange}
            onFocus={handleFocus}  >
          </Form.Control>
        </Form.Group>

        {
          errorMsg ? <p className='contact-form-error-msg'>{errorMsg}</p> : null
        }

        <div className='contact-form-btn-section'>
          <Button type='submit' size='lg'>Enviar</Button>
        </div>
      </Form>
    </>
  )
}

export default Contact