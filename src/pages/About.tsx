import { Link } from "react-router-dom";
import Organigramme from "../components/Organigramme";

export default function About() {
	return (
		<div id="about" className="bg-white text-blue-950 px-6 py-12 space-y-12">
			<section id="histoire" className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-6">
					À propos de l'UDPS 57
				</h1>
				<p className="text-lg leading-relaxed text-justify">
					L’
					<strong>
						Unité Départementale des Premiers Secours de la Moselle (UDPS 57)
					</strong>{" "}
					a vu le jour en <strong>2023</strong>, fondée par un groupe d’amis
					passionnés de secourisme. Actifs au sein d’une précédente association
					ayant malheureusement cessé son activité, ces bénévoles engagés ont
					décidé de poursuivre leur mission en créant une nouvelle structure à
					leur image : solidaire, professionnelle, et profondément humaine.
				</p>
			</section>

			<section id="activites" className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-semibold mb-4">
					Nos activités sur le terrain
				</h2>
				<p className="text-lg leading-relaxed text-justify">
					L’UDPS 57 assure régulièrement des <strong>postes de secours</strong>{" "}
					dans de nombreuses communes de Moselle, notamment lors d’événements
					organisés par la ville d’<strong>Hayange</strong>, la ville de{" "}
					<strong>Metz</strong>, ou encore au{" "}
					<strong>Parc des Expositions</strong>, où nous avons également notre
					siège social.
				</p>
				<p className="mt-4">
					Vous souhaitez nous solliciter pour un dispositif de secours ?{" "}
					<Link
						to="/contact"
						className="text-blue-700 hover:underline font-medium"
					>
						Contactez-nous ici
					</Link>
					.
				</p>
			</section>

			<section id="affiliation" className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-semibold mb-4">Notre affiliation</h2>
				<p className="text-lg leading-relaxed text-justify mb-4">
					Nous sommes fiers d’être affiliés à l’
					<strong>Association Nationale des Premiers Secours (ANPS)</strong>,
					réseau national qui regroupe des structures partageant des valeurs
					communes de rigueur, de formation, et d'engagement.
				</p>
				<a
					href="https://www.anps.fr"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-4"
				>
					<img
						src="./images/Logo-ANPS-2024.jpg"
						alt="Logo ANPS"
						className="h-16"
					/>
					<span className="text-blue-700 underline hover:text-blue-900 font-medium">
						Visiter le site de l’ANPS
					</span>
				</a>
			</section>

			<section
				id="agrements"
				className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md"
			>
				<h2 className="text-3xl font-semibold mb-4">Nos agréments</h2>
				<p className="text-lg leading-relaxed text-justify">
					<strong>Association agréée de sécurité civile</strong>
					<br />
					L’UDPS 57 est reconnue par le{" "}
					<strong>Ministère de l’Intérieur</strong> comme une association agréée
					de sécurité civile. Cet agrément confirme notre capacité à intervenir
					dans le cadre des missions de sécurité civile prévues par la loi.
				</p>

				<p className="mt-4 text-lg leading-relaxed text-justify">
					En tant qu’association agréée, nous collaborons étroitement avec les{" "}
					<strong>autorités publiques</strong> pour mettre en œuvre les plans de
					sécurité sur le territoire national.
				</p>

				<h3 className="text-xl font-bold mt-6 mb-2">Nos missions agréées</h3>
				<ul className="list-disc list-inside text-lg pl-4">
					<li>
						<strong>D – Dispositifs prévisionnels de secours (DPS)</strong> :
						L’UDPS 57 est habilitée à organiser des dispositifs prévisionnels de
						secours lors de rassemblements, pour assurer la sécurité des
						participants et intervenir rapidement en cas de besoin.
					</li>
				</ul>
			</section>
			{/* Insertion de l'organigramme ici */}
			<section id="organigramme" className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-semibold text-center my-8">
					Organigramme de l’association
				</h2>
				<Organigramme />
			</section>
			{/* Flèche de retour en haut */}
			<div className="flex justify-center mt-16">
				<a href="#about">
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
