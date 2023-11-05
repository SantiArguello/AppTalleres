import React from 'react';

const FiltradoRemito = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 bg-gray-100 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Filtrado de Remito</h2>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-1 font-bold">Nombre:</label>
          <input type="text" id="nombre" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block mb-1 font-bold">Correo:</label>
          <input type="email" id="correo" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="servicio" className="block mb-1 font-bold">Servicio:</label>
          <input type="text" id="servicio" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="metodoPago" className="block mb-1 font-bold">Método de Pago:</label>
          <select id="metodoPago" className="w-full p-2 border rounded">
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="fecha" className="block mb-1 font-bold">Fecha:</label>
          <input type="date" id="fecha" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block mb-1 font-bold">Teléfono:</label>
          <input type="tel" id="telefono" className="w-full p-2 border rounded" />
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded">Buscar Servicio</button>
        </div>
      </div>
    </div>
  );
}

export default FiltradoRemito;