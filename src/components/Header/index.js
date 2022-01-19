import "./style.css";

const Header = () => {
  return (
    <header className="intro">
      <div className="container">
        <div className="text-container">
          <h1 className="intro__title">masterMind</h1>
          <p className="intro__text">_theSchoolofCode_edition</p>
        </div>
        <div className="img-container">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            alt="school of code"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
