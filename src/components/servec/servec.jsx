import "./servec.css"
import Svg1 from "../../assets/svg/servec-img1.svg"
import Svg2 from "../../assets/svg/servec-img2.svg"
import Svg3 from "../../assets/svg/servec-img3.svg"
import Svg4 from "../../assets/svg/servec-img4.svg"
import Svg5 from "../../assets/svg/servec-img5.svg"


function Servec() {
    return (
        <>
            <div className="container">
                <div className="servec-box">

                    <h2 className="servec-title">
                        Xizmatlar
                    </h2>
                    <p className="servec-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <div className="servec-content">
                        <div className="content-items">
                            <img src={Svg1} alt="svg" />
                            <h3 className="servec-img-title">Vebsayt tuzish</h3>
                            <p className="servec-img-text">lorem ipsum</p>
                        </div>
                        <div className="content-items">
                            <img src={Svg2} alt="svg" />
                            <h3 className="servec-img-title">Telegram bot</h3>
                            <p className="servec-img-text">lorem ipsum</p>
                        </div>
                        <div className="content-items">
                            <img src={Svg3} alt="svg" />
                            <h3 className="servec-img-title">SMM</h3>
                            <p className="servec-img-text">lorem ipsum</p>
                        </div>
                        <div className="content-items">
                            <div className="content-items4-item">
                                <img src={Svg4} alt="svg" />
                                <h3 className="servec-img-title">Grafik dizayn</h3>
                            <p className="servec-img-text">lorem ipsum</p>
                            </div>
                            <div className="content-items4-item">
                                <img src={Svg5} alt="svg" />
                                <h3 className="servec-img-title">Telegram bot</h3>
                            <p className="servec-img-text">lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <button className="servec-btn">Buyurtma berish</button>
                </div>
            </div>
        </>
    )
}

export default Servec 