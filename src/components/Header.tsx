import Background from "./Background";

function Header() {
	return (
		<>
			<div className="absolute top-0 left-0 z-20 w-full hidden md:flex justify-between items-center text-center bg-black/70 text-white px-5 py-1">
				<div className="flex flex-row items-center gap-4 text-sm">
					<div className="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 text-white"
						>
							<title id="marqueurgoogleTitle">
								Logo marqueur emplacement google
							</title>
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
						</svg>
						<p>Parc des expositions, 57070 Metz</p>
					</div>
					<p>Tél : 06 12 34 56 78</p>
				</div>
				<div className="flex flex-row gap-4">
					<a
						href="https://www.facebook.com/UDPS57"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-5 h-5 fill-white hover:scale-110 transition-transform"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<title id="facebookTitle">Logo Facebook</title>
							<path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
						</svg>
					</a>

					<a
						href="https://www.instagram.com/udps57/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-5 h-5 fill-white hover:scale-110 transition-transform"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<title id="instagrammeTitle">Logo Instagramme</title>
							<path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.248 2.418.415a4.924 4.924 0 0 1 1.79 1.164 4.922 4.922 0 0 1 1.165 1.79c.166.458.358 1.248.414 2.418.058 1.267.07 1.65.07 4.85s-.012 3.583-.07 4.85c-.056 1.17-.248 1.96-.414 2.418a4.93 4.93 0 0 1-1.165 1.79 4.923 4.923 0 0 1-1.79 1.165c-.458.166-1.248.358-2.418.414-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.248-2.418-.414a4.91 4.91 0 0 1-1.79-1.165 4.918 4.918 0 0 1-1.165-1.79c-.166-.458-.358-1.248-.414-2.418C2.213 15.783 2.2 15.4 2.2 12s.013-3.583.07-4.85c.056-1.17.248-1.96.414-2.418a4.92 4.92 0 0 1 1.165-1.79A4.91 4.91 0 0 1 5.639 2.7c.458-.166 1.248-.358 2.418-.414C8.416 2.213 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.012 7.052.07 5.78.128 4.748.332 3.94.648a7.107 7.107 0 0 0-2.557 1.67A7.112 7.112 0 0 0 .648 4.94C.332 5.748.128 6.78.07 8.052.012 9.332 0 9.735 0 12c0 2.265.012 2.668.07 3.948.058 1.272.262 2.304.578 3.112a7.11 7.11 0 0 0 1.67 2.557 7.107 7.107 0 0 0 2.557 1.67c.808.316 1.84.52 3.112.578C8.332 23.988 8.735 24 12 24s3.668-.012 4.948-.07c1.272-.058 2.304-.262 3.112-.578a7.107 7.107 0 0 0 2.557-1.67 7.11 7.11 0 0 0 1.67-2.557c.316-.808.52-1.84.578-3.112.058-1.28.07-1.683.07-3.948s-.012-2.668-.07-3.948c-.058-1.272-.262-2.304-.578-3.112a7.112 7.112 0 0 0-1.67-2.557 7.107 7.107 0 0 0-2.557-1.67C19.252.332 18.22.128 16.948.07 15.668.012 15.265 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
						</svg>
					</a>

					<a
						href="https://www.tiktok.com/@udps57"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-5 h-5 fill-white hover:scale-110 transition-transform"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
						>
							<title id="tiktokTitle">Logo TikTok</title>
							<path d="M224 72a72 72 0 0 1-72-72h-40v168a24 24 0 1 1-24-24 24 24 0 0 1 8.4 1.5V113.1A64 64 0 1 0 160 176V97.6a104.4 104.4 0 0 0 64 22.4Z" />
						</svg>
					</a>
				</div>
			</div>
			<div className="h-[55vh]">
				<Background />
			</div>
		</>
	);
}

export default Header;
