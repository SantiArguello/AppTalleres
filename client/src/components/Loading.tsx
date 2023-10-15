const Loading = () => {
	return (
		<div className="md:absolute top-16 right-8 mt-4 flex items-center justify-center space-x-2">
			<span className="relative flex h-3 w-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
			</span>
			<span className="relative flex h-3 w-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
			</span>
			<span className="relative flex h-3 w-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
			</span>
		</div>
	);
};

export default Loading;
