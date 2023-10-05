export interface Cliente {
	_id: string;
	apellido: string;
	correo: string;
	fechaRegistro: Date;
	moto: string[];
	nombre: string;
	telefono: number | null;
}
