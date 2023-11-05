import image from "/src/assets/loco.jpg";

export default function Login() {
	return (
		<>
			<section className="relative flex flex-wrap lg:h-screen lg:items-center">
				<div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-lg text-center">
						<h1 className="text-7xl font-bold m-20 sm:text-1xl">Benelli</h1>

						<p className="mt-4 text-gray-500">Iniciar sesión</p>
					</div>

					<form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
						<div>
							<label>Email</label>

							<div className="relative">
								<input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />

								<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</span>
							</div>
						</div>

						<div>
							<label>Password</label>

							<div className="relative">
								<input
									type="password"
									className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
									placeholder="Enter password"
								/>

								<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</span>
							</div>
						</div>

						<div className="grid m-4">
							<p className="text-m text-gray-500">
								Eres nuevo?
								<a className="underline" href="">
									Registrate aqui
								</a>
							</p>
							<button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 em-4 text-sm font-large text-whit  ">
								Registrarse
							</button>
							<label> utiliza tu cuenta google para Iniciar</label>
							<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 m4 rounded shadow-md">
								Registrarse con Google
							</button>
						</div>
					</form>
				</div>
				<div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
					<img alt="Welcome" src={image} className="absolute inset-0 h-full w-full object-cover" />
				</div>
			</section>
		</>
	);
}