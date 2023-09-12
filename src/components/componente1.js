import React, { useState } from 'react';



const SimplePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que quieras con los datos del formulario
    console.log('Datos del formulario:', formData);
  };
  return (
   <>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="pregunta"
         
          onChange={handleInputChange}
        />
      </div>
             
      <button type="submit">Enviar</button>
    </form>
   </>
  );
};

export default SimplePage;
