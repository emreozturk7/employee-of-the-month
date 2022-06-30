import "./style/Header.sass";
import WingieEnuygunLogo from "../../constants/icons/wingieenuygun.png";

function Header() {
    return (
        <div className="header-main-container">
            <div className="header-row-container">
                <img src={WingieEnuygunLogo} alt="" className="logo-container" />
            </div>
        </div>
    )
}

export default Header;