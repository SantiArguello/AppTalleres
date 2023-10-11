export interface Cliente {
	_id: string;
	apellido: string;
	correo: string;
	facturas?: string[];
	fechaRegistro: Date;
	moto: Moto[];
	nombre: string;
	telefono: number | null;
}

export interface Moto {
	año: number;
	kilometros: number;
	modelo: Modelo;
}

export interface Modelo {
	_id: string;
	modelo: string;
	segmento: string;
}
