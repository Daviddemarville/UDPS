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

function Articles() {
	const [upcomingArticles, setUpcomingArticles] = useState<Article[]>([]);

	useEffect(() => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // ignore l'heure

		const futureEvents = (articlesData as Article[])
			.filter((article) => {
				const start = new Date(article.startDate);
				const end = new Date(article.endDate);
				start.setHours(0, 0, 0, 0);
				end.setHours(0, 0, 0, 0);
				return end >= today; // événement encore à venir
			})
			.map((article) => {
				// Calcule la "prochaine date possible d'affichage"
				const start = new Date(article.startDate);
				start.setHours(0, 0, 0, 0);

				let nextDate = start;

				if (article.recurrence === "weekly" && article.daysOfWeek) {
					const todayCopy = new Date(today);
					while (todayCopy <= new Date(article.endDate)) {
						const dayName = todayCopy.toLocaleString("en-US", {
							weekday: "long",
						});
						if (article.daysOfWeek.includes(dayName)) {
							nextDate = new Date(todayCopy);
							break;
						}
						todayCopy.setDate(todayCopy.getDate() + 1);
					}
				} else if (article.recurrence === "daily" && today > start) {
					nextDate = today;
				} else if (today > start) {
					nextDate = today;
				}

				return { ...article, nextDate };
			})
			.sort((a, b) => a.nextDate.getTime() - b.nextDate.getTime())
			.slice(0, 3);

		setUpcomingArticles(futureEvents);
	}, []);

	if (upcomingArticles.length === 0) return null;

	return (
		<article className="next flex flex-col-reverse md:flex-row-reverse justify-evenly p-6 md:p-8">
			{upcomingArticles.map((article) => (
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
			))}
		</article>
	);
}

export default Articles;
