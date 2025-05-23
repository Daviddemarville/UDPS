import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Burger() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null); // Type explicite pour la référence

	// Ferme le menu si on clique en dehors
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={menuRef}>
			{/* Icône burger */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="focus:outline-none"
			>
				<div className="space-y-1">
					<span className="block w-6 h-0.5 bg-blue-950" />
					<span className="block w-6 h-0.5 bg-blue-950" />
					<span className="block w-6 h-0.5 bg-blue-950" />
				</div>
			</button>

			{/* Menu mobile */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-blue-950 text-white rounded shadow-lg z-50 flex flex-col space-y-2 p-4">
					<Link
						to="/"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						Accueil
					</Link>
					<Link
						to="/About"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						L'UDPS 57
					</Link>
					<Link
						to="/Membres"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						Nos bénévoles
					</Link>
					<Link
						to="/Dps"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						Poste de Secours
					</Link>
					<Link
						to="/Don"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						Nous soutenir
					</Link>
					<Link
						to="/Contact"
						className="hover:bg-blue-700 px-2 py-1 rounded"
						onClick={() => setIsOpen(false)}
					>
						Contact
					</Link>
				</div>
			)}
		</div>
	);
}

export default Burger;
