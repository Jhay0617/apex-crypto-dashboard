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
import { Badge } from "@mui/material";
import CurrencyToggle from "./CurrencyToggle";

function Header() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.items);
  const mode = useSelector(themeMode);
  return (
    <StyledHeader>
      <Logo />
      <NavList>
        <StyledNavLink to="/">
          <Home size={24} /> Home
        </StyledNavLink>
        <StyledNavLink to="/watchlist">
          <Eye size={24} />
          <Badge badgeContent={watchlist.length} color="primary">
            Watch list
          </Badge>
        </StyledNavLink>
        <StyledNavLink to="/market">
          <Newspaper size={24} /> Market News
        </StyledNavLink>
      </NavList>
      <Actions>
        <CurrencyToggle />
      </Actions>
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
