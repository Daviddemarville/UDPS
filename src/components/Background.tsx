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
		let newClass = "";
		let newTitle = "";
		let newText = "";
		let newShowButton = false;

		switch (location.pathname) {
			case "/":
				newClass = "bg-[url('/images/fond5.jpg')] bg-cover bg-left max-h-[50%]";
				newTitle = "";
				newText = "";
				newShowButton = false;
				break;
			case "/Membres":
				newClass =
					"bg-[url('/images/fond3.jpg')] bg-cover bg-center max-h-[50%]";
				newTitle = "";
				newText = "";
				newShowButton = false;
				break;
			case "/Don":
				newClass =
					"bg-[url('/images/fond10.jpg')] bg-cover bg-center max-h-[50%]";
				newTitle = "";
				newText = "";
				break;
			case "/About":
				newClass = "bg-[url('/images/fond2.jpg')] bg-cover bg-top max-h-[50%]";
				newTitle = "";
				newText = "";
				break;
			case "/Dps":
				newClass = "bg-[url('/images/fond7.jpg')] bg-cover bg-left max-h-[50%]";
				newTitle = "";
				newText = "";
				break;
			case "/Contact":
				newClass =
					"bg-[url('/images/fond8.jpg')] bg-cover bg-center max-h-[50%]";
				newTitle = "";
				newText = "";
				break;
			case "/Archive":
				newClass =
					"bg-[url('/images/fond9.jpg')] bg-cover bg-center max-h-[50%]";
				newTitle = "";
				newText = "";
				break;
			default:
				newClass = "bg-gray-400"; // Fond par défaut
				break;
		}

		// Mise à jour des états
		setTimeout(() => {
			setBackgroundClass(newClass);
			setTitle(newTitle);
			setText(newText);
			setShowButton(newShowButton);
		}, 50);
	}, [location.pathname]);

	return (
		<div
			className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out ${backgroundClass}`}
		>
			{/* Affichage conditionnel du contenu */}
			{(title || text || showButton) && (
				<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 mt-25 ml-10 bg-blue-950/80 border-1 border-black rounded-full px-8 md:p-6 text-center text-white shadow-xl">
					{title && <h1 className=" md:text-4xl font-bold">{title}</h1>}
					{text && <p className="mt-2  text-sm md:text-lg">{text}</p>}
					{showButton && (
						<button
							type="button"
							className="text-sm md:text-md mt-4 px-4 md:px-6  md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
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
