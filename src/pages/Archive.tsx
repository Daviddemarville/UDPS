import { useEffect, useState } from "react";
import articlesData from "../data/articles.json";

type Recurrence = "once" | "daily" | "weekly";

interface Article {
	title: string;
	image: string;
	alt: string;
	info: string;
	description: string;
	link: string;
	startDate: string;
	endDate: string;
	recurrence?: Recurrence;
	daysOfWeek?: string[];
}

function Archive() {
	const [allArticles, setAllArticles] = useState<Article[]>([]);

	useEffect(() => {
		// Charger les articles à partir du fichier JSON
		setAllArticles(articlesData as Article[]);
	}, []);

	return (
		<div id="archive" className="archive-container p-6">
			<h1 className="text-2xl text-center font-bold mb-4">Tous les articles</h1>

			<article className="flex flex-col gap-2 md:flex-row justify-evenly p-6 md:p-8">
				{allArticles.length === 0 ? (
					<p>Aucun article disponible.</p>
				) : (
					allArticles.map((article) => (
						<aside
							key={article.title}
							className="flex flex-col items-center outline outline-black shape-outside-inset-5 text-blue-950 w-full md:w-1/4 p-4 mb-6"
						>
							<h3>{article.title}</h3>
							<img
								src={article.image}
								alt={article.alt}
								className="mt-1 mb-0.5 w-48"
							/>
							<p>
								<b>{article.info}</b>
							</p>
							<p>{article.description}</p>
							<a
								href={article.link}
								target="_blank"
								rel="noreferrer"
								className="text-primary-color"
							>
								En savoir plus
							</a>
						</aside>
					))
				)}
			</article>
			{/* Flèche de retour en haut */}
			<div className="flex justify-center mt-16">
				<a href="#archive">
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

export default Archive;
