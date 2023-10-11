import { ClientCard } from ".";
import { Cliente } from "../../utils/interfaces";

const ClientList = ({ clientes }: { clientes: Cliente[] }) => {
	if (!clientes.length) {
		return <div className="text-center my-10 font-semibold text-xl">No se encontraron clientes</div>;
	}

	return (
		<div className="bg-neutral-100 dark:bg-neutral-800 shadow overflow-hidden sm:rounded-md">
			<ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-700">
				{clientes.map((client) => (
					<li key={client.correo}>
						<ClientCard client={client} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientList;
