import axios, { AxiosResponse, AxiosError } from "axios";
import { json } from "react-router-dom";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetcherState<T> {
	data: T | null;
	error: Error | null;
	isLoading: boolean;
}

export async function fetchData<T>(url: string, method: HttpMethod = "GET", body?: unknown): Promise<FetcherState<T>> {
	try {
		const response: AxiosResponse<T> = await axios.request({
			url: `http://localhost:3000/${url}`,
			method,
			data: body,
			headers: {
				"Content-Type": "application/json",
			},
		});

		return {
			data: response.data,
			error: null,
			isLoading: false,
		};
	} catch (error) {
		// Manejar errores de Axios
		const { message, response } = error as AxiosError;
		throw json({ message: response?.data.message || message });
	}
}

// Define funciones adicionales para los diferentes métodos HTTP
export async function fetchGet<T>(url: string): Promise<FetcherState<T>> {
	return fetchData(url, "GET");
}

export async function fetchPost<T>(url: string, body: unknown): Promise<FetcherState<T>> {
	return fetchData(url, "POST", body);
}

export async function fetchPut<T>(url: string, body: unknown): Promise<FetcherState<T>> {
	return fetchData(url, "PUT", body);
}

export async function fetchDelete<T>(url: string): Promise<FetcherState<T>> {
	return fetchData(url, "DELETE");
}
