import "./footer.css"
import telegram from "../../assets/svg/telegram.svg"
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"

function Footer() {
    return (
            <section className="section-footer">
                <div className="container">
                    <div className="footer-box">
                        <ul className="footer-item">
                            <li className="footer-items">
                                <h4 className="footer-titles">Copyright 2020</h4>
                                <p className="footer-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
                            </li>
                            <li className="footer-items">
                                <h4 className="footer-titles">Sayt sahifalari</h4>
                                <div className="footer-content">
                                    <a className="footer-texts" href="#">Bosh sahifa</a>
                                    <a className="footer-text" href="#">Xizmatlar</a>
                                    <a className="footer-text" href="#">Portfolio</a>
                                    <a className="footer-text" href="#">Jamoa</a>
                                    <a className="footer-text" href="#">Blog</a>
                                    <a className="footer-text" href="#">Kontaktlar</a>
                                </div>

                            </li>
                            <li className="footer-items">
                                <h4 className="footer-titles">Biz internetda</h4>
                                <div className="footer-content">
                                    <a className="icons-name" href="#">
                                        <img className="footer-img" src={telegram} alt="erroe" />telegram</a>
                                    <a className="icons-name" href="#">  <img className="footer-img" src={facebook} alt="erroe" />facebook</a>
                                    <a className="icons-name" href="#"><img className="footer-img" src={instagram} alt="erroe" />instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


    )
}

export default Footer