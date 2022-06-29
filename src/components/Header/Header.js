import "./style/Header.sass";
import EnUygunLogo from "../../constants/icons/enuygunlogo.png";

function Header() {
    return (
        <div className="header-main-container">
            <div className="header-row-container">
                <img src={EnUygunLogo} alt="" className="logo-container" />
                <p className="header-title">Employee Of The Month</p>
            </div>
        </div>
    )
}

export default Header;