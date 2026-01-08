import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2000;

  padding-bottom: env(safe-area-inset-bottom);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textSecondary};
  transition: all 0.3s ease;
  flex: 1;
  height: 100%;
  justify-content: center;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  & span {
    font-size: 1.1rem;
    font-weight: 500;
    font-family: "Geist Mono", monospace;
  }

  &.active {
    color: ${(props) => props.theme.colors.accent};
    filter: drop-shadow(0 0 5px ${(props) => props.theme.colors.accent}40);
  }
`;
