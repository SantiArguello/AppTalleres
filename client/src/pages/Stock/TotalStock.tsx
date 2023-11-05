import React from 'react';

const TotalStock = () => {
   const unidades = 456;
   const total = "$100.000";

  return (
    <div className="p-4 rounded shadow w-1/5 mx-4 float-left">
      <div className="flex justify-between">
        <label>Total Productos: </label>
        <div className="ml-2">{unidades}</div>
      </div>
      <div className="flex justify-end mt-2">{total}</div>
    </div>
  );
}

export default TotalStock;