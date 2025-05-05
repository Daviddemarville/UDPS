import Background from "./Background";

function Header() {
	return (
		<>
			<div className="absolute top-0 left-0 z-20 w-full hidden md:flex justify-between items-center text-center bg-black/70 text-white px-5 py-1">
				<div className="flex flex-row items-center gap-4 text-sm">
					<div className="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 text-white"
						>
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
						</svg>
						<p>Parc des expositions, 57070 Metz</p>
					</div>
					<p>Tél : 06 12 34 56 78</p>
				</div>
				<p></p>
			</div>
			<div className="h-[55vh]">
				<Background />
			</div>
		</>
	);
}

export default Header;
