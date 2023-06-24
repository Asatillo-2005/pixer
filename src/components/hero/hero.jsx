import "./hero.css"
import Logo1 from "../../assets/img/hero-img-1.png"

function Hero() {
    return (
        <>
            <div className="container">
                <div className="hero-box">
                    <ul className="hero-content1">
                        <li className="content1-items">
                            <h1 className="content1-h1">
                                Biznesingizni keyingi bosqichga
                                olib chiqing
                            </h1>
                        </li>
                        <li className="content1-items">
                            <p className="content1-text">
                                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                            </p>
                        </li>
                        <li className="content1-items">
                            <button className="content1-btn">
                                Xizmatlar bilan tanishish
                            </button>
                        </li>
                    </ul>

                    <img src={Logo1} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Hero