import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./Main.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("❌ L'élément #root est introuvable dans le DOM.");
}
