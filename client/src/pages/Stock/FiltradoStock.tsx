import React, { useState } from 'react';

const FiltradoStock = () => {
  // Definir el estado para el modelo de moto y el nombre
  const [modelo, setModelo] = useState('');
  const [nombre, setNombre] = useState('');

  // Funciones para manejar cambios en los inputs
  const handleModeloChange = (e) => {
    setModelo(e.target.value);
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de filtrado con los valores de `modelo` y `nombre`
    // por ejemplo, podrías enviar estos valores a una función de filtrado o a un API para obtener los resultados filtrados.
  }

  return (
    <div className=" items-start  mt-10">
      <form className="bg-white  rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-0">
          <label htmlFor="modelo" className="block mb-2">Modelo de Moto:</label>
          <select id="modelo" name="modelo" value={modelo} onChange={handleModeloChange} className="w-full p-2 border border-gray-300 rounded">
            <option value="">Selecciona un modelo</option>
            <option value="modelo1">Modelo 1</option>
            <option value="modelo2">Modelo 2</option>
            {/* Agrega más opciones según tus necesidades */}
          </select>
        </div>
        <div className="m-2 bg-blue-200 p-2">
          <label htmlFor="nombre" className="block mb-2">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Filtrar</button>
      </form>
    </div>
  )
}

export default FiltradoStock;