const ClientSkeleton = () => {
	return (
		<div className="flex items-center px-4 py-4 sm:px-6">
			<div className="min-w-0 flex-1 flex items-center animate-pulse  ">
				<div className="rounded-full bg-neutral-200 dark:bg-neutral-600 h-12 w-12"></div>
				<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
					<div className="space-y-6 py-1">
						<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
						<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
					</div>
					<div className="hidden md:block">
						<div className="space-y-6 py-1">
							<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
							<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};
export default ClientSkeleton;
