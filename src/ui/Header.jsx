import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/asset">Asset</NavLink>
        <NavLink to="/watchlist">Watch list</NavLink>
        <NavLink to="/market">Market News</NavLink>
      </nav>
    </header>
  );
}

export default Header;
