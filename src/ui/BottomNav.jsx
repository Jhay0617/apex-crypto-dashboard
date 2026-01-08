import { Home, Eye, Newspaper } from "lucide-react";
import { MobileNavWrapper, MobileNavLink } from "../styles/MobileNav";

function BottomNav() {
  return (
    <MobileNavWrapper aria-label="Mobile Bottom Navigation">
      <MobileNavLink to="/" end>
        <Home />
        <span>Home</span>
      </MobileNavLink>

      <MobileNavLink to="/watchlist">
        <Eye />
        <span>Watchlist</span>
      </MobileNavLink>

      <MobileNavLink to="/market">
        <Newspaper />
        <span>News</span>
      </MobileNavLink>
    </MobileNavWrapper>
  );
}

export default BottomNav;
