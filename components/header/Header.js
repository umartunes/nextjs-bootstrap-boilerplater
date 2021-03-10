
import { Fade } from "react-awesome-reveal";

function Header({ currentPage }) {

    return (

        <header>
            <nav className="navbar navbar-main navbar-expand-md navbar-light bg-white px-0">
                <div className="container">
                    <Fade direction="down" triggerOnce>
                        <a className="navbar-brand" href="#">Fredrick's Restaurant</a>
                    </Fade>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Fade direction="down" triggerOnce cascade>
                                {["shop", "recipes", "learn", "about", "blog"].map((item, i) => {
                                    return <li className="nav-item text-capitalize">
                                        <a className={`nav-link mx-3 px-4 ${currentPage == item ? "border-bottom border-2 border-secondary font-weight-bold" : ""}`} href="#">{item}</a>
                                    </li>
                                })}
                            </Fade>

                        </ul>

                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-expand navbar-light bg-light-grey px-0">
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
        </header>

    )
}

export default Header
