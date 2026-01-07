import { Coins, Eye, Home, Moon, Newspaper, Sun } from "lucide-react";
import {
  NavList,
  StyledHeader,
  StyledNavLink,
  Actions,
  ThemeToggle,
} from "../styles/HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, themeMode } from "../store/themeSlice";
import Logo from "./Logo";

function Header() {
  const dispatch = useDispatch();
  const mode = useSelector(themeMode);
  return (
    <StyledHeader>
      <Logo />
      <NavList>
        <StyledNavLink to="/">
          <Home size={24} /> Home
        </StyledNavLink>
        <StyledNavLink to="/watchlist">
          <Eye size={24} /> Watch list
        </StyledNavLink>
        <StyledNavLink to="/market">
          <Newspaper size={24} /> Market News
        </StyledNavLink>
      </NavList>
      <Actions>
        <ThemeToggle
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        >
          {mode === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </ThemeToggle>
      </Actions>
    </StyledHeader>
  );
}

export default Header;
