import { Link } from "react-router-dom";
import Burger from "./Burger";

function Nav() {
	return (
		<nav className="fixed top-0 md:top-5 left-0 w-full z-50 bg-white/90 text-blue-950 font-bold p-1 flex justify-between md:justify-around items-center shadow-md">
			<div>
				<img
					src="../images/Logo_ANPSV3-2.png"
					alt="Logo de l'UDPS 57"
					className="h-10 md:h-20 inline-block mr-2 transform transition-transform duration-300 hover:scale-125"
				/>
			</div>

			{/* Menu Desktop */}
			<ul className="hidden md:flex flex-row gap-4">
				<li>
					<Link to="/" className="hover:text-blue-700">
						Accueil
					</Link>
				</li>
				<li>
					<Link to="/About" className="hover:text-blue-700">
						L'UDPS 57
					</Link>
				</li>
				<li>
					<Link to="/Membres" className="hover:text-blue-700">
						Nos bénévoles
					</Link>
				</li>
				<li>
					<Link to="/Dps" className="hover:text-blue-700">
						Poste de Secours
					</Link>
				</li>
				<li>
					<Link to="/Don" className="hover:text-blue-700">
						Nous soutenir
					</Link>
				</li>
				<li>
					<Link to="/Contact" className="hover:text-blue-700">
						Contact
					</Link>
				</li>
			</ul>

			{/* Burger pour mobile */}
			<div className="md:hidden">
				<Burger />
			</div>
		</nav>
	);
}

export default Nav;
