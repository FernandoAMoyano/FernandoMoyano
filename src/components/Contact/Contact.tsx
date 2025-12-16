'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset status después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido');
      
      // Reset status después de 5 segundos
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <h2>Contacto</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
        />

        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          disabled={status === 'sending'}
        />

        {errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}

        <button type="submit" className={styles.btn} disabled={status === 'sending'}>
          {status === 'sending' && 'Enviando...'}
          {status === 'success' && '¡Enviado! ✓'}
          {status === 'error' && 'Error ✗'}
          {status === 'idle' && 'Enviar'}
        </button>
      </form>
    </section>
  );
}
