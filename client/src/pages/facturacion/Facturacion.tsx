import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

const Facturacion = () => {
	return <>
	<h2 className="text-2xl font-bold">Facturacion</h2>
	<div className="flex flex-col items-center h-screen space-y-4">
	  <button className="bg-green-500 text-black px-6 py-3 rounded text-lg">Crear Remito</button>
	  <NavLink to="/facturacion/filtrado-remito">Buscar Remitos</NavLink>
	  <img src={logo} alt="Logo" className="max-w-full h-auto md:max-w-md" />
	</div>
  </>;
};


export default Facturacion;
