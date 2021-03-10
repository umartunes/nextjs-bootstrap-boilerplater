
import { Fade } from "react-awesome-reveal";
import Link from 'next/link'
function Header({ currentPage }) {

    return (

        <header>
            <nav className="navbar navbar-main navbar-expand-md navbar-light bg-white px-0">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">Fredrick's Restaurant</a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            {["shop", "recipes", "about", "blog"].map((item, i) => {
                                return <li className="nav-item text-capitalize">

                                    {/* if recipes then take to home */}
                                    <Link href={`/${item !== "recipes" ? item : ""}`}>
                                        <a className={`nav-link mx-3 px-4 ${currentPage == item ? "border-bottom border-2 border-secondary font-weight-bold" : ""}`} >{item}</a>
                                    </Link>

                                </li>
                            })}


                        </ul>

                    </div>

                </div>
            </nav>

            {/* Dispaly only in recipes page */}
            {currentPage === "recipes"
                ? <nav className="navbar navbar-expand navbar-light bg-light-grey px-0">
                    <div className="container">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>

                        </ul>


                    </div>
                </nav>
                : ""
            }

        </header>

    )
}

export default Header
