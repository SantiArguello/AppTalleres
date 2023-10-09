import React from 'react';
import { Link } from 'react-router-dom';

const BotonNuevoService = () => {
  return (
    <Link to="/nuevo-service">
            <button className=" mr-10 bg-blue-500 hover:bg-blue-700 w-40 h-12 text-white font-bold rounded  top-20 right-10">
                Nuevo Service
            </button>
        </Link>
  );
};

export default BotonNuevoService;