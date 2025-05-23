// src/components/Background.tsx
import { useLocation } from "react-router-dom";

interface RouteConfig {
	backgroundClass: string;
	title?: string;
	text?: string;
	showButton?: boolean;
}

const routeConfig: Record<string, RouteConfig> = {
	"/": {
		backgroundClass: "bg-[url('/images/fond5.jpg')] bg-cover bg-left",
		// Exemple sans texte
		// title: "Accueil",
		// text: "Bienvenue sur la page d'accueil.",
		// showButton: false,
	},
	"/Membres": {
		backgroundClass: "bg-[url('/images/fond3.jpg')] bg-cover bg-center",
		// title: "Nos Membres",
		// text: "Découvrez la communauté qui fait vivre notre projet.",
		// showButton: true,
	},
	"/Don": {
		backgroundClass: "bg-[url('/images/fond10.jpg')] bg-cover bg-center",
		// title: "Faire un Don",
		// text: "Votre soutien nous aide à avancer.",
		// showButton: true,
	},
	"/About": {
		backgroundClass: "bg-[url('/images/fond2.jpg')] bg-cover bg-top",
		//title: "À propos de nous",
		//text: "Bienvenue sur la page À propos : découvrez notre histoire, nos valeurs et rencontrez notre équipe du bureau.",
		//showButton: false, // affiche le bouton « En savoir plus »
	},
	"/Dps": {
		backgroundClass: "bg-[url('/images/fond7.jpg')] bg-cover bg-left",
		// title: "DPS",
		// text: "Informations sur les DPS.",
		// showButton: false,
	},
	"/Contact": {
		backgroundClass: "bg-[url('/images/fond8.jpg')] bg-cover bg-center",
		// title: "Contactez-nous",
		// text: "Envoyez-nous un message via le formulaire ci-dessous.",
		// showButton: false,
	},
	"/Archive": {
		backgroundClass: "bg-[url('/images/fond9.jpg')] bg-cover bg-center",
		// title: "Archives",
		// text: "Retrouvez ici toutes les archives de nos publications.",
		// showButton: false,
	},
};

const DEFAULT_CONFIG: RouteConfig = {
	backgroundClass: "bg-blue-400 bg-cover bg-center",
};

const Background = () => {
	const { pathname } = useLocation();
	const { backgroundClass, title, text, showButton } =
		routeConfig[pathname] ?? DEFAULT_CONFIG;

	return (
		<div
			className={`
        absolute inset-0 -z-10 transition-all duration-700 ease-in-out
        ${backgroundClass}
        h-[50vh] md:h-[50vh]
      `}
		>
			{(title || text || showButton) && (
				<div
					className="
          absolute top-1/4 left-1/2 transform -translate-x-1/2
          p-6 md:p-8
          bg-blue-950/80 border border-black rounded-full
          text-center text-white shadow-xl
          max-w-[90%] md:max-w-md
        "
				>
					{title && <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>}
					{text && <p className="mt-2 text-sm md:text-lg">{text}</p>}
					{showButton && (
						<button
							type="button"
							className="
                mt-4 px-4 md:px-6 md:py-2
                text-sm md:text-md
                bg-blue-500 rounded-lg hover:bg-blue-600
                transition duration-300
              "
						>
							En savoir plus
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Background;
