import { useEffect, useState } from "react";
import membresData from "../data/membre.json";

interface Membre {
	nom: string;
	prenom: string;
	roles: {
		bureau?: string[];
		secourisme?: string[];
	};
	photo: string;
	bio: string;
	motivation: string;
}

const Avatar = ({ src, alt }: { src: string; alt: string }) => {
	const isValid = src && src.trim() !== "";

	if (!isValid) {
		return (
			<div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full border-4 border-blue-950 mb-4">
				<svg
					className="w-16 h-16 text-gray-500"
					fill="currentColor"
					viewBox="0 0 24 24"
					role="img"
					aria-label="Avatar par défaut"
				>
					<title>Avatar par défaut</title>
					<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z" />
				</svg>
			</div>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			className="w-32 h-32 rounded-full border-4 border-blue-950 mb-4 object-cover"
		/>
	);
};

const Membre = () => {
	const [membres, setMembres] = useState<Membre[]>([]);
	const [selectedMembre, setSelectedMembre] = useState<Membre | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const sortedMembres = [...membresData].sort((a, b) =>
			a.nom.localeCompare(b.nom),
		);
		setMembres(sortedMembres);
	}, []);

	useEffect(() => {
		if (selectedMembre) {
			setIsVisible(true);
		} else {
			setTimeout(() => setIsVisible(false), 300);
		}
	}, [selectedMembre]);

	const renderRoles = (roles: Membre["roles"]) => (
		<div className="flex flex-wrap justify-center gap-2 mb-2">
			{roles.bureau?.map((role) => (
				<span
					key={`bureau-${role}`}
					className="text-red-600 text-sm font-medium"
				>
					{role}
				</span>
			))}
			{roles.secourisme?.map((role) => (
				<span
					key={`secourisme-${role}`}
					className="text-blue-600 text-sm font-medium"
				>
					{role}
				</span>
			))}
		</div>
	);

	return (
		<div className="bg-white py-12 px-6">
			<h1 className="text-center text-3xl font-semibold mb-8 text-blue-950">
				Membres de l&apos;Association
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{membres.map((membre) => (
					<button
						key={`${membre.nom}-${membre.prenom}`}
						type="button"
						onClick={() => setSelectedMembre(membre)}
						className="cursor-pointer flex flex-col items-center p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 focus:outline-none"
					>
						<div className="flex items-center justify-between mb-4">
							<Avatar
								src={membre.photo}
								alt={`${membre.prenom} ${membre.nom}`}
							/>
							<img
								src="../images/Logo_ANPSV3-2.png"
								alt="logo"
								className="w-1/2"
							/>
						</div>
						<h3 className="text-xl font-bold text-blue-950 mb-2">
							{`${membre.prenom} ${membre.nom}`}
						</h3>
						{renderRoles(membre.roles)}
						<p className="text-gray-700 text-sm text-center mb-4">
							{membre.bio}
						</p>
					</button>
				))}
			</div>

			{isVisible && (
				<div
					className={`fixed inset-0 bg-blue-950/80 flex items-center justify-center z-50 transition-opacity duration-300 ${
						selectedMembre ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					<div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 animate-fade-in">
						<button
							type="button"
							onClick={() => setSelectedMembre(null)}
							className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
							aria-label="Fermer"
						>
							&times;
						</button>
						{selectedMembre && (
							<>
								<div className="flex items-center justify-between mb-4">
									<Avatar
										src={selectedMembre.photo}
										alt={`${selectedMembre.prenom} ${selectedMembre.nom}`}
									/>
									<img
										src="../images/Logo_ANPSV3-2.png"
										alt="logo"
										className="w-1/2"
									/>
								</div>
								<h3 className="text-2xl font-bold text-center text-blue-950">
									{`${selectedMembre.prenom} ${selectedMembre.nom}`}
								</h3>
								{renderRoles(selectedMembre.roles)}
								<p className="text-gray-700 text-sm mb-2">
									{selectedMembre.bio}
								</p>
								<p className="text-gray-600 text-sm italic">
									{selectedMembre.motivation}
								</p>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Membre;
