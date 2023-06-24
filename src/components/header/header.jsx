import Logo from "../../assets/img/header-logo.svg"
import "./header.css"

function Header() {
    return (
        <header>
            <div className="container">

                <div className="header-box">
                    <a className="header-content" href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                    <ul className="header-content2">

                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Bosh sahifa</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Xizmatlar</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Portfolio</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Jamoa</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Blog</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-links" href="#">Kontaktlar</a>
                        </li>
                        <li className="content2-items">
                            <a className="content2-items-btn" href="#">+998 90 921 37 11</a>
                        </li>

                    </ul>

                </div>


            </div>
        </header>
    )
}

export default Header