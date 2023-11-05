import React from 'react';

const TablaStock = () => {
  // array con productos de ejemplo
  const productos = [
    { nombre: 'Producto 1', precio: '$50.00', precioVenta: '$100.00', cantidad: 10, modelo: 'Modelo A', estado: 'Disponible' },
    { nombre: 'Producto 2', precio: '$60.00', precioVenta: '$120.00', cantidad: 5, modelo: 'Modelo B', estado: 'En proceso' },
    { nombre: 'Producto 3', precio: '$70.00', precioVenta: '$140.00', cantidad: 8, modelo: 'Modelo C', estado: 'Agotado' },
    { nombre: 'Producto 4', precio: '$80.00', precioVenta: '$160.00', cantidad: 12, modelo: 'Modelo D', estado: 'Disponible' },
    { nombre: 'Producto 5', precio: '$90.00', precioVenta: '$180.00', cantidad: 15, modelo: 'Modelo E', estado: 'En proceso' }
  ];

  return (<div className="m-10  ">
    <table className="border-collapse border border-gray-400 ">
      <thead>
        <tr>
          <th className="border border-gray-400 p-2">Productos</th>
          <th className="border border-gray-400 p-2">Precio</th>
          <th className="border border-gray-400 p-2">Precio Venta</th>
          <th className="border border-gray-400 p-2">Cantidad</th>
          <th className="border border-gray-400 p-2">Modelo</th>
          <th className="border border-gray-400 p-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr key={index}>
            <td className="border border-gray-400 p-2">{producto.nombre}</td>
            <td className="border border-gray-400 p-2">{producto.precio}</td>
            <td className="border border-gray-400 p-2">{producto.precioVenta}</td>
            <td className="border border-gray-400 p-2">{producto.cantidad}</td>
            <td className="border border-gray-400 p-2">{producto.modelo}</td>
            <td className="border border-gray-400 p-2">{producto.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TablaStock;