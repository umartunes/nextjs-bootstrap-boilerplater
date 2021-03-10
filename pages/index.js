// import styles from '../styles/Home.module.scss'
import Layout from '../layout/layout'
import Image from 'next/image'

export default function Home() {
	return (
		<Layout currentPage="recipes">
			<div className="Home">
				<div className="container">
					<div className="row mt-5">

						{/* Left Side */}
						<div className="col-12 col-md-6">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Recipes</a></li>
									<li className="breadcrumb-item"><a href="#">Bread</a></li>
									<li className="breadcrumb-item active" aria-current="page">Quick Bread</li>
								</ol>
							</nav>
							<h1 className="mb-5">Whole-Grain Banana Bread</h1>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p>
							{/* <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi autem at! Itaque voluptatibus asperiores tempore cupiditate nostrum odit distinctio consequuntur tempora, sequi illo doloremque consectetur expedita dolores recusandae molestiae.</p> */}

							{/* Details */}
							<div className="mt-5">

								<div className="row">
									<div className="col-1">
										<p className="mt-2"><span className='far fa-clock fa-2x'></span></p>
									</div>
									<div className="col-10 font-weight-bold">
										<div className="row">
											<div className="col">
												<span><small>PREP</small> <br />10 mins</span>
											</div>
											<div className="col-5">
												<span><small>BAKE</small> <br />1 hr to 1hr 15 mins</span>
											</div>
											<div className="col">
												<span><small>TOTAL</small> <br />1hr 10 mins</span>
											</div>
										</div>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-1">
										<p className="mt-2"><span className='far fa-list-alt fa-2x'></span></p>
									</div>
									<div className="col-10 font-weight-bold">
										<div className="row">
											<div className="col-6">
												<span><small>YIELD</small> <br />1 loaf, 12 generous servings</span>
											</div>
											<div className="col">
												<button className="btn btn-sm btn-outline-secondary mr-2"><span className='fas fa-plus mr-1'></span> Save Recipe</button>
												<button className="btn btn-sm btn-outline-secondary"><span className='fas fa-print mr-1'></span> Print</button>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>


						{/* Right Side */}
						<div className="col-12 col-md-6">
							<div className="border rounded p-2">

								<Image
									src="/images/bread.jpg" // Route of the image file
									width={710} // Desired size with correct aspect ratio
									height={470} // Desired size with correct aspect ratio
									alt="Bread"
									layout="responsive"
									className="img-fluid rounded"
								/>
							</div>
						</div>

					</div>
				</div>
			</div>
		</Layout>

	)
}
