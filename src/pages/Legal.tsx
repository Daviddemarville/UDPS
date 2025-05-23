export default function Legal() {
	return (
		<div className="max-w-3xl mx-auto px-4 py-8 text-sm leading-relaxed">
			<h1 className="text-3xl font-bold text-center mb-8">Mentions légales</h1>

			<h2 className="text-xl font-semibold mt-6 mb-2">Éditeur du site</h2>
			<p>
				Le site <strong>udps57.vercel.app</strong> est édité par l’association
				<strong>
					{" "}
					Union Départementale des Premiers Secours de la Moselle (UDPS 57)
				</strong>
				, association de sécurité civile agréée, régie par la loi du 1er juillet
				1901.
			</p>
			<p>
				Domiciliée à l'adresse :{" "}
				<strong>
					Parc des expositions, rue de la grange aux bois 57070 Metz.
				</strong>
			</p>

			<h2 className="text-xl font-semibold mt-6 mb-2">
				Responsable de la publication
			</h2>
			<p>
				M. <strong>David de Marville</strong>, développeur web bénévole pour
				l’UDPS 57.
				<br />
				Contact :{" "}
				<a
					className="text-blue-600 underline"
					href="mailto:de.marville.david@gmail.com"
				>
					de.marville.david@gmail.com
				</a>
			</p>

			<h2 className="text-xl font-semibold mt-6 mb-2">Hébergement</h2>
			<p>
				Le site est hébergé par <strong>Vercel Inc.</strong>
				<br />
				Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA
				<br />
				<a className="text-blue-600 underline" href="https://vercel.com">
					https://vercel.com
				</a>
			</p>

			<h2 className="text-xl font-semibold mt-6 mb-2">
				Propriété intellectuelle
			</h2>
			<p>
				Le contenu du site (textes, images, codes et données) est protégé par
				les lois en vigueur sur la propriété intellectuelle.
				<br />
				Sauf mention contraire, le site est mis à disposition selon les termes
				de la licence
				<strong>
					{" "}
					Creative Commons Attribution - Pas d’Utilisation Commerciale (CC BY-NC
					4.0)
				</strong>
				.
			</p>
			<p className="mt-2">
				Vous pouvez consulter les détails de cette licence ici :{" "}
				<a
					className="text-blue-600 underline"
					href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr"
					target="_blank"
					rel="noopener noreferrer"
				>
					CC BY-NC 4.0
				</a>
			</p>

			<h2 className="text-xl font-semibold mt-6 mb-2">
				Protection des données
			</h2>
			<p>
				Aucune donnée personnelle n’est collectée sans votre consentement.
				<br />
				Le site ne contient actuellement ni compte utilisateur, ni système de
				suivi ou de publicité.
			</p>

			<h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
			<p>
				Pour toute question ou signalement, vous pouvez nous contacter à l’une
				des adresses suivantes :
				<br />
			</p>
			<ul className="list-disc ml-6 mt-2">
				<li>
					<a
						href="mailto:de.marville.david@gmail.com"
						className="text-blue-600 underline"
					>
						de.marville.david@gmail.com
					</a>
				</li>
				<li>
					<a href="mailto:udps57@gmail.com" className="text-blue-600 underline">
						udps57@gmail.com
					</a>
				</li>
			</ul>

			<h2 className="text-xl font-semibold mt-6 mb-2">État du site</h2>
			<p className="text-red-600 font-semibold mt-2">
				Notre site est actuellement en cours de déploiement. Certaines
				fonctionnalités peuvent ne pas encore être pleinement opérationnelles.
				Merci pour votre patience et votre compréhension.
			</p>
		</div>
	);
}
