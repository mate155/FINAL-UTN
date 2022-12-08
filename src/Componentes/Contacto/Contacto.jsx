import React from 'react';
import './Contacto.css';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkzgnle");
  if (state.succeeded) {
      window.location.reload()
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">
        Nombre
      </label>
      <input
        id="nombre"
        type="nombre" 
        name="nombre"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}
function Contacto() {
  return (
    <ContactForm />
  );
}
export default Contacto;