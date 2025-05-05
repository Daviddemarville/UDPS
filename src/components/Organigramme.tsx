type Membre = {
	prenom: string;
	nom: string;
	photo?: string;
	roles: { bureau: string[] };
};

import membresData from "../data/membre.json";
import rolesData from "../data/roles.json"; // Importation des prérogatives

export default function Organigramme() {
	const getMembreByRole = (role: string): Membre | undefined =>
		membresData.find((m: Membre) => m.roles.bureau.includes(role));

	const rolesOrdre = [
		"Président",
		"Vice-président",
		"Trésorier",
		"Secrétaire",
		"Secrétaire adjointe",
		"Responsable opérationnel",
		"Responsable matériel",
		"Responsable logistique",
		"Formateur",
	];

	const organigramme = rolesOrdre
		.map((role) => {
			const membre = getMembreByRole(role);
			return membre ? { role, membre } : null;
		})
		.filter(Boolean) as { role: string; membre: Membre }[];

	return (
		<div className="bg-white text-blue-950 py-12 px-6">
			<h2 className="text-3xl font-bold text-center mb-10">
				Organigramme du Bureau
			</h2>
			<div className="flex flex-col items-center gap-12">
				{/* Président au centre en haut */}
				<div>
					{organigramme
						.filter(({ role }) => role === "Président")
						.map(({ role, membre }) => (
							<Card
								key={role}
								membre={membre}
								role={role}
								prerogatives={
									rolesData.find((r) => r.role === role)?.prerogatives || ""
								}
							/>
						))}
				</div>

				{/* Trésorier - Vice-Président - Secrétaire */}
				<div className="flex justify-center gap-10">
					{["Trésorier", "Vice-président", "Secrétaire"].map((role) => {
						const item = organigramme.find((r) => r.role === role);
						return item ? (
							<Card
								key={role}
								membre={item.membre}
								role={role}
								prerogatives={
									rolesData.find((r) => r.role === role)?.prerogatives || ""
								}
							/>
						) : null;
					})}
				</div>

				{/* Secrétaire adjointe, Responsable opérationnel */}
				<div className="flex justify-center gap-10">
					{["Secrétaire adjointe", "Responsable opérationnel"].map((role) => {
						const item = organigramme.find((r) => r.role === role);
						return item ? (
							<Card
								key={role}
								membre={item.membre}
								role={role}
								prerogatives={
									rolesData.find((r) => r.role === role)?.prerogatives || ""
								}
							/>
						) : null;
					})}
				</div>

				{/* Responsables divers */}
				<div className="flex justify-center flex-wrap gap-8">
					{["Responsable matériel", "Responsable logistique", "Formateur"].map(
						(role) => {
							const item = organigramme.find((r) => r.role === role);
							return item ? (
								<Card
									key={role}
									membre={item.membre}
									role={role}
									prerogatives={
										rolesData.find((r) => r.role === role)?.prerogatives || ""
									}
								/>
							) : null;
						},
					)}
				</div>
			</div>
		</div>
	);
}

function Card({
	membre,
	role,
	prerogatives,
}: { membre: Membre; role: string; prerogatives: string }) {
	return (
		<div className="bg-gray-100 rounded-2xl shadow-md p-6 w-64 text-center">
			<div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gray-200">
				{membre.photo ? (
					<img
						src={membre.photo.replace("./", "/")}
						alt={`${membre.prenom} ${membre.nom}`}
						className="object-cover w-full h-full"
					/>
				) : (
					<div className="flex items-center justify-center h-full text-sm text-gray-500">
						Pas de photo
					</div>
				)}
			</div>
			<h3 className="text-xl font-semibold">
				{membre.prenom} {membre.nom}
			</h3>
			<p className="text-sm text-blue-800 font-medium mt-1">{role}</p>
			<p className="text-sm text-gray-600 mt-4">{prerogatives}</p>
		</div>
	);
}
