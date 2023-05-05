import { useState } from "react";
import "./Header.css";

const NavButton = (props) => {
  const label = props.label;
  const toggle = props.toggle;
  const setToggleList = props.setToggleList;
  const index = props.index;

  const handleClick = () => {
    let newToggleList = [false, false, false, false, false];
    newToggleList[index] = true;
    setToggleList(newToggleList);
  }

  return (
    <span onClick={handleClick} className={toggle ? "nav-link toggle" : "nav-link"}>{label}</span>
  );
};

const Nav = () => {
  const [toggleList, setToggleList] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const navLabels = ["Home", "About", "Services", "Price", "Contact"];
  return (
    <nav>
      {
        navLabels.map((label, index) => {
          return <NavButton index={index} setToggleList={setToggleList} label={label} toggle={toggleList[index]} />
        })
      }
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <img
        src={require("./../../assets/medias/Logo.png")}
        alt=""
        className="logo"
      />
      <Nav />
      <div className="log-options">
        <span className="login-button">Login</span>
        <span className="register-button">Register</span>
      </div>
    </header>
  );
};

export default Header;
