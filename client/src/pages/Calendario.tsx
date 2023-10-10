import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moto1 from '../assets/moto1.png'
import moto2 from '../assets/moto2.png'


const listaMotos = [{
	id: 1,
    modelo: 'zanelita',
    imagen: moto1,
}, {
	id: 2,
	modelo: 'Pumita',
	imagen: moto2,
},];

const Calendario = () => {
	// Estados para almacenar los datos del formulario
	const [nombre, setNombre] = useState('');
	const [moto, setMoto] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [fecha, setFecha] = useState(null);
	const [motoSeleccionada, setMotoSeleccionada] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			nombre,
			moto,
			descripcion,
			// Puedes agregar más campos aquí si es necesario
		};

		// Aquí puedes realizar la lógica para enviar los datos a tu backend o hacer lo que necesites con ellos
		console.log(data);

		// Limpia los campos después de enviar
		setNombre('');
		setMoto('');
		setDescripcion('');
	};

	//controlador de eventos para el cambio en el select de motos:
	const handleSelectMoto = (e) => {
		const motoId = parseInt(e.target.value, 10);
		const moto = listaMotos.find(moto => moto.id === motoId);
		setMotoSeleccionada(moto);
	};

	return (
		<div className=" my-8 bg-white rounded shadow-lg p-6">
			<h2 className="text-2xl font-bold text-black mb-4">Nuevo Turno</h2>

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
					<input
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						className="border rounded w-full py-2 px-3"
						placeholder="Nombre"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Moto</label>
					<select
						value={listaMotos ? listaMotos.id : ''}
						onChange={handleSelectMoto}
						className="border rounded w-full py-2 px-3"
					>
						<option value="">Selecciona una moto</option>
						{listaMotos.map(moto => (
							<option key={moto.id} value={moto.id}>{moto.modelo}</option>
						))}
					</select>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Descripción del Trabajo</label>
					<textarea
						value={descripcion}
						onChange={(e) => setDescripcion(e.target.value)}
						className="border rounded w-full py-2 px-3 h-32"
						placeholder="Descripción"
					></textarea>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Fecha</label>
					<DatePicker
						selected={fecha}
						onChange={(date) => setFecha(date)}
						className="border rounded w-full py-2 px-3"
						dateFormat="dd/MM/yyyy"
						placeholderText="Selecciona una fecha"
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
				>
					Guardar Turno
				</button>
				{motoSeleccionada && (
					<div className="relative">
						<h3 className="text-lg font-bold mb-2">Moto Seleccionada</h3>
						<img src={motoSeleccionada.imagen} alt={motoSeleccionada.modelo} className="" />
						<p>{motoSeleccionada.modelo}</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default Calendario;
