import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevoService = () => {
	// Estados para almacenar los datos del formulario
	const [nombre, setNombre] = useState("");
	const [patente, setPatente] = useState("");
	const [modelo, setModelo] = useState("");
	const [kilometros, setKilometros] = useState("");
	const [detalles, setDetalles] = useState("");
	// Estados para repuestos
	const [repuestos, setRepuestos] = useState([{ nombre: "", cantidad: "" }]);
	// Estados para extras
	const [extras, setExtras] = useState([
		{ descripcion: "", precio: "" },
		{ descripcion: "", precio: "" },
	]);
	// Estado para total de repuestos y extras
	const [totalRepuestosExtras, setTotalRepuestosExtras] = useState({
		repuestos: "",
		extras: "",
	});

	// Estado para precio final
	const [precioFinal, setPrecioFinal] = useState("");

	const handleRepuestoChange = (index, key, value) => {
		const updatedRepuestos = [...repuestos];
		updatedRepuestos[index][key] = value;
		setRepuestos(updatedRepuestos);
	};

	const handleAddRepuesto = () => {
		setRepuestos([...repuestos, { nombre: "", cantidad: "" }]);
	};

	const handleRemoveRepuesto = (index) => {
		const updatedRepuestos = [...repuestos];
		updatedRepuestos.splice(index, 1);
		setRepuestos(updatedRepuestos);
	};

	const handleExtraChange = (index, key, value) => {
		const updatedExtras = [...extras];
		updatedExtras[index][key] = value;
		setExtras(updatedExtras);
	};

	const handleAddExtra = () => {
		setExtras([...extras, { descripcion: "", precio: "" }]);
	};

	const handleRemoveExtra = (index) => {
		const updatedExtras = extras.filter((_, i) => i !== index);
		setExtras(updatedExtras);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			nombre,
			patente,
			modelo,
			kilometros,
			detalles,
			repuestos,
			extras,
			totalRepuestosExtras,
			precioFinal,
		};
		// Aquí puedes realizar la lógica para enviar los datos a tu backend o hacer lo que necesites con ellos
		console.log({ nombre, patente, modelo, kilometros, detalles, repuestos });

		// Limpia los campos después de enviar
		setNombre("");
		setPatente("");
		setModelo("");
		setKilometros("");
		setDetalles("");
		setRepuestos([
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
		]);
		setExtras([
			{ descripcion: "", precio: "" },
			{ descripcion: "", precio: "" },
		]);
		setTotalRepuestosExtras({ repuestos: "", extras: "" });
		setPrecioFinal("");
		setRepuestos([
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
			{ nombre: "", cantidad: "" },
		]);
		setExtras([
			{ descripcion: "", precio: "" },
			{ descripcion: "", precio: "" },
		]);
		setTotalRepuestosExtras({ repuestos: "", extras: "" });
		setPrecioFinal("");
	};

	return (
		<div className=" max-w-4xl mx-auto my-8 bg-white rounded shadow-lg p-6">
			<h2 className=" text-2xl text-black font-bold mb-4">Nuevo Servicio</h2>

			<form onSubmit={handleSubmit}>
				<div className="flex items-center p-4">
					<div className="p-4">
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
							<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border rounded w-full py-2 px-3" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">Patente</label>
							<input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} className="border rounded w-full py-2 px-3" />
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">Modelo de Moto</label>
							<select value={modelo} onChange={(e) => setModelo(e.target.value)} className="border rounded w-full py-2 px-3">
								<option value="">Selecciona un modelo</option>
								{/* Agrega aquí las opciones de modelos de moto */}
							</select>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">Kilometros</label>
							<input
								type="text"
								value={kilometros}
								onChange={(e) => setKilometros(e.target.value)}
								className="border rounded w-full py-2 px-3"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">Detalles</label>
							<textarea
								value={detalles}
								onChange={(e) => setDetalles(e.target.value)}
								className="border rounded w-full py-2 px-3 h-32"></textarea>
						</div>
					</div>
					<div className="mt-8 border border-blue-50">
						<div className="my-10 flex-col">
							<h3 className="text-lg text-black font-bold m-2">Repuestos</h3>
							{repuestos.map((repuesto, index) => (
								<div className="flex mb-2" key={index}>
									<input
										type="text"
										className="border rounded text-black py-2 px-3 mr-2"
										placeholder="Nombre Repuesto"
										value={repuesto.nombre}
										onChange={(e) => handleRepuestoChange(index, "nombre", e.target.value)}
									/>
									<input
										type="text"
										className="border rounded text-black py-2 px-3 mr-2"
										placeholder="Cantidad"
										value={repuesto.cantidad}
										onChange={(e) => handleRepuestoChange(index, "cantidad", e.target.value)}
									/>
									<button
										type="button"
										className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
										onClick={() => handleRemoveRepuesto(index)}>
										X
									</button>
								</div>
							))}
							<button type="button" className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700 mr-2" onClick={handleAddRepuesto}>
								Agregar Repuesto
							</button>
						</div>

						{/* Sección de Extras */}
						<h3 className="text-lg text-black font-bold my-4">Cotizacion</h3>
						{extras.map((extra, index) => (
							<div className="flex mb-4" key={index}>
								<input
									type="text"
									className="border rounded w-1/2 py-2 px-3 mr-4"
									placeholder="Descripción Extra"
									value={extra.descripcion}
									onChange={(e) => handleExtraChange(index, "descripcion", e.target.value)}
								/>
								<input
									type="text"
									className="border rounded w-1/2 py-2 px-3"
									placeholder="Precio"
									value={extra.precio}
									onChange={(e) => handleExtraChange(index, "precio", e.target.value)}
								/>
								<button
									type="button"
									className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
									onClick={() => handleRemoveExtra(index)}>
									X
								</button>
							</div>
						))}
						<button type="button" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={handleAddExtra}>
							Agregar Gasto Extra
						</button>

						{/* Total de Repuestos y Extras */}
						<h3 className="text-lg font-bold my-4">Total Repuestos y Extras</h3>
						<div className="flex            mb-4">
							<input
								type="text"
								className="border rounded w-1/2 py-2 px-3 mr-4"
								placeholder="Total Repuestos"
								value={totalRepuestosExtras.repuestos}
								onChange={(e) =>
									setTotalRepuestosExtras({
										...totalRepuestosExtras,
										repuestos: e.target.value,
									})
								}
							/>
							<input
								type="text"
								className="border rounded w-1/2 py-2 px-3 mr-4"
								placeholder="Total Extras"
								value={totalRepuestosExtras.extras}
								onChange={(e) =>
									setTotalRepuestosExtras({
										...totalRepuestosExtras,
										extras: e.target.value,
									})
								}
							/>

							<input type="text" className="border rounded w-1/2 py-2 px-3 mr-4" placeholder="Mano de Obra" value="" />
						</div>

						{/* Precio Final */}
						<div className="mb-4">
							<label className="block text-gray-700  text-sm font-bold mb-2">Precio Final</label>
							<input
								type="text"
								value={precioFinal}
								onChange={(e) => setPrecioFinal(e.target.value)}
								className="border rounded  py-2 px-3"
							/>
						</div>
						<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
							Guardar
						</button>

						<Link to="/trabajos">
							<button className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700">Volver</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NuevoService;
