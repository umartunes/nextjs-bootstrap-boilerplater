// import styles from '../styles/Home.module.scss'
import Layout from '../layout/layout'
import Image from 'next/image'
export default function Shop() {
	return (
		<Layout currentPage="shop">
			<div className="Shop">
				<div className="container">
					<div className="row">

						{/* Left Side */}
						<div className="col-12 col-md-8">

							<nav className="mt-5" aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item active"><a href="#">Shop</a></li>
								</ol>
							</nav>

							<h1 className="mb-3">Shop with us</h1>
							<div className="row">

								{Array(6).fill("").map((item, i) => {
									return <div className="col-4" key={i}>

										<div className="card mb-3">
											<Image
												src="/images/bread.jpg" // Route of the image file
												width={710} // Desired size with correct aspect ratio
												height={470} // Desired size with correct aspect ratio
												alt="Bread"
												layout="responsive"
												className="img-fluid card-image-top"
											/>
											
											<div className="card-body">
												<h5 className="card-title">Shop Item {i + 1}</h5>
												<p className="card-text">Some quick example text.</p>
											</div>

											<div className="card-body text-right">
												
												<a href="#" className="btn btn-sm btn-secondary">Add to cart</a>
											</div>
										</div>
									</div>
								})}
							</div>

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
