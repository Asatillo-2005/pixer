import "./menu.css"

function Menu() {
    return (
        <>
            <div className="container">

                <div className="menu-box">
                    <h2 className="menu-title">Buyurtma berish</h2>
                    <p className="menu-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                    <form className="menu-form">
                        <input className="input1" type="text" placeholder="Ismingiz" />
                        <input className="input1" type="number" placeholder="Telefon raqamingiz" />
                        <input className="input1" type="data" placeholder="Xizmat turi" />
                        <button className="menu-btn">Buyurtma berish</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Menu