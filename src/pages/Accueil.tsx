import { Link } from "react-router-dom";
import Articles from "../components/Article";

function Accueil() {
	return (
		<main id="accueil" className="bg-white/50 text-blue-950 m-0 p-0 min-w-full">
			{/* Section d'appel à l'action */}

			{/* Section des services */}
			<section className="home flex flex-col md:flex-row justify-evenly gap-4 p-6 md:p-8">
				<article className="poste flex flex-col items-center outline outline-black shape-outside-inset-5 text-blue-950 w-full md:w-1/3 text-center p-4 mb-6">
					<h2 className="text-center p-2">Postes de secours</h2>
					<p className="text-center mb-4">
						Faites appel à nos secouristes pour assurer la sécurité de vos
						participants lors de vos évènements.
					</p>
					<Link to="/Dps">
						<button
							type="button"
							className="devis w-40 h-10 bg-blue-950 text-white text-center"
						>
							Demander un devis
						</button>
					</Link>
				</article>
				<article className="poste flex flex-col items-center outline outline-black shape-outside-inset-5 text-blue-950 w-full md:w-1/3 text-center p-4 mb-6">
					<h2 className="text-center p-2">Devenez bénévole</h2>
					<p className="text-center mb-4">
						Offrez un peu de votre temps pour aider les autres et vivre des
						moments forts. Rejoignez une équipe solidaire et engagée près de
						chez vous.
					</p>
					<Link to="/Adhesion">
						<button
							type="button"
							className="devis w-40 h-10 bg-red-600 text-white text-center"
						>
							Vous engager
						</button>
					</Link>
				</article>
				<article className="sponsor flex flex-col justify-between outline outline-black shape-outside-inset-5 text-blue-950 w-full md:w-1/3 text-center p-4 mb-6">
					<h2 className="text-center p-2">Nous soutenir</h2>
					<p className="text-center mb-4">
						Votre soutien financier est essentiel pour maintenir nos activités.
						Découvrez les différentes possibilités.
					</p>
					<Link to="/Don">
						<button
							type="button"
							className="don w-40 h-10 bg-green-600 text-white text-center"
						>
							Faire un don
						</button>
					</Link>
				</article>
			</section>

			{/* Section des agréments */}
			<section className="secur flex flex-col md:flex-row justify-evenly p-6 md:p-8">
				<article className="regle flex flex-col items-center text-blue-950 w-full md:w-1/3 text-center p-4 mb-6">
					<h2 className="text-center p-2">
						Association agrée de sécurité civile
					</h2>
					<p className="text-center mb-4">
						L’Unité Départementale des Premiers Secours de la Moselle (UDPS 57)
						est une association agréée de sécurité civile par le Ministère de
						l’Intérieur.
					</p>
					<p className="text-center mb-4">
						Cet agrément valide notre capacité à contribuer aux missions de
						sécurité civile prévues par la règlementation.
					</p>
					<p className="text-center">
						En tant qu’association agréée, l’UDPS 57 est engagée dans une
						collaboration étroite avec les autorités publiques pour participer à
						la mise en œuvre des plans de sécurité civile sur le territoire
						départemental.
					</p>
				</article>
				<article className="agrements flex flex-col items-center text-blue-950 w-full md:w-1/3 text-center p-4 mb-6">
					<h2 className="text-center p-2">Nos Agréments</h2>
					<h3 className="text-center mb-4">
						D – Dispositifs prévisionnels de secours
					</h3>
					<p className="text-center">
						L’UDPS 57 est habilitée à déployer des dispositifs prévisionnels de
						secours lors de rassemblements de personnes. Cette mission nous
						engage à prévenir les risques et à assurer des prises en charge
						rapides et adaptées en cas de nécessité, garantissant ainsi la
						sécurité des participants.
					</p>
				</article>
			</section>

			{/* Section des prochains postes */}
			<section className="nextpost flex flex-col items-center pt-8">
				<article className="titlenextpost outline outline-black shape-outside-inset-5 bg-blue-950/80 text-white w-5/6 text-center p-4 mb-8">
					<h2 className="text-lg sm:text-xl md:text-2xl font-bold">
						Nos prochains postes de secours
					</h2>
				</article>
				<article className="next flex flex-col justify-evenly p-6 md:p-8">
					<Articles />
					<Link to="/Archive">
						<h3 className="text-center mb-4">Voir tout les articles</h3>
					</Link>
				</article>
			</section>
			{/* Flèche de retour en haut */}
			<div className="flex justify-center mt-16">
				<a href="#accueil">
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
		</main>
	);
}

export default Accueil;
