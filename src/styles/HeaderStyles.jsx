import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4.8rem;
  background-color: ${(props) => props.theme.colors.surface}CC;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    height: 6rem;
  }
`;
export const NavList = styled.nav`
  display: flex;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
  transition: all 0.3s ease;

  & svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    & svg {
      transform: translateY(-2px);
    }
  }

  &.active {
    color: ${(props) => props.theme.colors.accent};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -1.8rem;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
