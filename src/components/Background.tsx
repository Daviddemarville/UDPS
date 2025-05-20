// src/components/Background.tsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Background = () => {
	const location = useLocation();
	const [backgroundClass, setBackgroundClass] = useState("");
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const backgrounds: Record<string, string> = {
			"/": "bg-fond5",
			"/Membres": "bg-fond3",
			"/Don": "bg-fond10",
			"/About": "bg-fond2",
			"/Dps": "bg-fond7",
			"/Contact": "bg-fond8",
			"/Archive": "bg-fond9",
		};

		const bg = backgrounds[location.pathname] || "bg-gray-400";

		setBackgroundClass(`${bg} bg-cover bg-center min-h-[50vh]`);
		setTitle(""); // ajoute ton titre si besoin ici
		setText(""); // idem
		setShowButton(false); // adapte selon la page
	}, [location.pathname]);

	return (
		<div
			className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out ${backgroundClass}`}
			role="banner"
		>
			{(title || text || showButton) && (
				<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-blue-950/80 border border-black rounded-full px-6 md:px-8 py-4 md:p-6 text-center text-white shadow-xl">
					{title && <h1 className="text-xl md:text-4xl font-bold">{title}</h1>}
					{text && <p className="mt-2 text-sm md:text-lg">{text}</p>}
					{showButton && (
						<button
							type="button"
							className="text-sm md:text-md mt-4 px-4 md:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
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
