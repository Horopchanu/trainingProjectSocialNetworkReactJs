import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href="/profile">
        <img
          src="https://i.pinimg.com/originals/11/83/99/1183997537de71649495430d2a14219b.png"
          alt="logo"
          className={classes.header__logo}
        />
      </a>
      <h3 className={classes.title}>development by Khoropchanu Alex</h3>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <p className={classes.loginBlockText}>{props.login}</p>
        ) : (
          <NavLink to={"/login"} className={classes.loginBlockText}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
