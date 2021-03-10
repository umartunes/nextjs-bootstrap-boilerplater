import Head from 'next/head'
import { Fade } from "react-awesome-reveal";
import Header from '../components/header/Header'

export default function Layout({ children, currentPage = "recipes", siteTitle = 'Frederick Assignment' }) {

	return (
		<div className="Layout">

			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="A prototype project created for Frederick" />
				<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />

				{/* FontAwesome */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
					integrity="sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI=" crossorigin="anonymous" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css"
					integrity="sha256-UZFVAO0Fn854ajzdWnJ2Oze6k1X4LNqE2RJPW3MBfq8=" crossorigin="anonymous" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css"
					integrity="sha256-8DcgqUGhWHHsTLj1qcGr0OuPbKkN1RwDjIbZ6DKh/RA=" crossorigin="anonymous" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css"
					integrity="sha256-1xUFPzbRrl0qOLXDyBNYpuBMMThdiVPJEtZx24deLeg=" crossorigin="anonymous" />

				{/* Material UI */}
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

			</Head>

			<div className="App">

				<Header currentPage={currentPage} />

				<main>{children}</main>

				<footer>
					<div className="container">
						<Fade direction="up" triggerOnce>
							<p className="text-center my-4">&copy; {new Date().getFullYear()} Frederick's Restaurant. Made with <span style={{ color: 'red' }}>❤</span> by Umar.</p>
						</Fade>
					</div>
				</footer>

			</div>

		</div>
	)
}
