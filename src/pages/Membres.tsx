import Membre from "../components/Membre";
import { Link } from "react-router-dom"; // Assure-toi que tu utilises React Router pour les liens.

export default function Membres() {
	return (
		<div>
			{/* Titre de la section avec un id pour l'ancre */}
			<h1
				id="adhesion"
				className="text-center text-2xl font-bold my-6 text-blue-950"
			>
				Rejoindre l'Association et s'Impliquer
			</h1>

			{/* Texte explicatif sur l'adhésion et l'implication */}
			<p className="text-center text-lg mb-6 text-gray-700">
				Nous croyons en l'importance de l'engagement et de l'implication de
				chacun dans la vie associative. Que vous soyez intéressé par l'adhésion
				ou souhaitez vous impliquer davantage dans nos projets, vous êtes les
				bienvenus pour rejoindre notre communauté dynamique.
			</p>

			{/* Lien vers la page d'adhésion */}
			<div className="text-center mb-6">
				<Link
					to="/adhesion"
					className="text-blue-950 hover:text-blue-700 font-semibold"
				>
					En savoir plus sur l'adhésion
				</Link>
			</div>

			{/* Espace réservé pour le futur composant Formulaire */}
			<div className="my-8 text-center">
				{/* Ici, tu pourras ajouter ton composant Formulaire une fois qu'il sera créé */}
				{/* <Formulaire /> */}
			</div>

			{/* Affichage des membres */}
			<Membre />

			{/* Flèche de retour en haut */}
			<div className="flex justify-center mt-16">
				<a href="#adhesion">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="100"
						height="100"
						className="text-blue-950 hover:text-blue-700 transition duration-300"
						aria-label="Remonter en haut de la page"
					>
						<title>Remonter en haut de la page</title>
						<path d="M12 8l-6 6h12l-6-6z" fill="currentColor" />
					</svg>
				</a>
			</div>
		</div>
	);
}
