import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Membres from "../pages/Membres";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Don from "../pages/Don";
import Dps from "../pages/Dps";
import Archive from "../pages/Archive";
import Legal from "../pages/Legal";
import Adhesion from "../pages/Adhesion";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Router() {
	return (
		<>
			<div className="">
				<div>
					<Header />
				</div>
				<div>
					<Nav />
				</div>
				<main className="min-h-screen p-4">
					<Routes>
						<Route path="/" element={<Accueil />} />
						<Route path="/membres" element={<Membres />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/Archive" element={<Archive />} />
						<Route path="/Don" element={<Don />} />
						<Route path="/Dps" element={<Dps />} />
						<Route path="/Legal" element={<Legal />} />
						<Route path="/Adhesion" element={<Adhesion />} />
						<Route path="*" element={<h2>Page non trouvée</h2>} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
}
