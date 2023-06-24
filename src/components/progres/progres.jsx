import "./progres.css"
import Img1 from "../../assets/svg/progres-img1.svg"
import Img2 from "../../assets/svg/progres-img2.svg"
import Img3 from "../../assets/svg/progres-img3.svg"
import Img4 from "../../assets/svg/progres-img4.svg"
import Img5 from "../../assets/svg/progres-img5.svg"

function Progres() {
    return (
        <>
            <div className="container">
                <div className="progres-container">
                    <h2 className="progres-title">Biz qanday ishlaymiz?</h2>
                    <p className="progres-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <ul className="progres-content">
                        <li className="progres-items">
                            <img src={Img1} alt="img" />
                            <div className="progres-items-content">
                            <h4 className="progres-items-title">Talablarni aniqlab chiqamiz</h4>
                            <p className="progres-items-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                            </div>
                        </li>
                        <li className="progres-items">
                            <div className="progres-items-content">
                            <h4 className="progres-items-title">Talablarni aniqlab chiqamiz</h4>
                            <p className="progres-items-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                            </div>
                            <img src={Img2} alt="img" />
                        </li>
                        <li className="progres-items">
                            <img src={Img3} alt="img" />
                            <div className="progres-items-content">
                            <h4 className="progres-items-title">Talablarni aniqlab chiqamiz</h4>
                            <p className="progres-items-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                            </div>
                        </li>
                        <li className="progres-items">
                            <div className="progres-items-content">
                            <h4 className="progres-items-title">Talablarni aniqlab chiqamiz</h4>
                            <p className="progres-items-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                            </div>
                            <img src={Img4} alt="img" />
                        </li>
                        <li className="progres-items">
                            <img src={Img5} alt="img" />
                            <div className="progres-items-content">
                            <h4 className="progres-items-title">Talablarni aniqlab chiqamiz</h4>
                            <p className="progres-items-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                            </div>
                        </li>
                    </ul>
                    <button className="progres-btn">Buyurtma berish</button>
                </div>

            </div>
        </>
    )
}

export default Progres