import React from 'react';
import BotonNuevoService from '../components/BotonNuevoService';
import  { useState } from 'react';

const Trabajos = () => {
	const [filtroNombre, setFiltroNombre] = useState('');
	const [filtroPatente, setFiltroPatente] = useState('');
	const [filtroModelo, setFiltroModelo] = useState('');
	// Función para manejar el envío del formulario
	const handleSubmit = (e) => {
		e.preventDefault();
		// implementar la lógica para filtrar los elementos
		// usando los valores de filtroNombre, filtroPatente y filtroModelo
		console.log('Filtrar por:', filtroNombre, filtroPatente, filtroModelo);
	};


	return (<><h2 className="pt-1 text-2xl font-bold">Trabajos</h2>
	
		<div className="pt-0 left-20 flex flex-wrap">
			
			<div className=" contents  w-1/4 "> <div className=' ml-10 top-20  '><form className="mb-8 ml-8"  onSubmit={handleSubmit}>
          <div className="p-0 flex mb-4">
		  <BotonNuevoService />
            <input
              type="text"
              className="border rounded w-1/6 py-2 px-3 mr-4"
              placeholder="Nombre"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />
            <input
              type="text"
              className="border rounded w-1/6 py-2 px-3 mr-4"
              placeholder="Patente"
              value={filtroPatente}
              onChange={(e) => setFiltroPatente(e.target.value)}
            />
            <input
              type="text"
              className="border rounded w-1/6 py-2 px-3"
              placeholder="Modelo"
              value={filtroModelo}
              onChange={(e) => setFiltroModelo(e.target.value)}
            />
			<button
            type="submit"
            className="  bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Filtrar
          </button>
          </div>
          
        </form>
		</div></div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 2</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 3</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 4</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 5</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 6</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 7</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 8</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 9</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 10</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 11</div>
			<div className="border border-gray-100 shadow p-4 rounded w-1/4 p-2">Elemento 12</div>
		</div></>)
};

export default Trabajos;
