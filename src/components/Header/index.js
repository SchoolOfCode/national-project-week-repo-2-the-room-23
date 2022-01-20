import "./style.css";
import logo from "../../img-src/logo.png";

const Header = () => {
  return (
    <header className="intro">
      <div className="container">
        <div className="text-container">
          <h1 className="intro__title">masterMind</h1>
          <p className="intro__text">_theSchoolofCode_edition</p>
        </div>
        <div className="img-container">
          <img src={logo} alt="school of code" />
        </div>
      </div>
    </header>
  );
};

export default Header;
