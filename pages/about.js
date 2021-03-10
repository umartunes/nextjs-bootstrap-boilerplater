// import styles from '../styles/Home.module.scss'
import Layout from '../layout/layout'

export default function About() {
	return (
		<Layout currentPage="about">
			<div className="About">
				<div className="container">
					<div className="row">

						{/* Left Side */}
						<div className="col-12 col-md-8">

							<nav className="mt-5" aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item active"><a href="#">About</a></li>
								</ol>
							</nav>

							<h1 className="mb-3">About US</h1>
							

							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p>

						</div>


						{/* Right Side */}
						<div className="col-12 col-md-4">
							<div className="div sticky-top pt-5">
								<div className="card">
									<div className="card-header"><h4>Useful Links</h4></div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">Cras justo odio</li>
										<li className="list-group-item">Dapibus ac facilisis in</li>
										<li className="list-group-item">Vestibulum at eros</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</Layout>

	)
}
