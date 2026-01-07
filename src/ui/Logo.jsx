import styled from "styled-components";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const IconWrapper = styled.div`
  background: ${(props) => props.theme.colors.accent};
  color: #0f172a;
  padding: 0.6rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px ${(props) => props.theme.colors.accent}40;
`;

const BrandName = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 2.2rem;
  letter-spacing: -1.5px;
  color: ${(props) => props.theme.colors.textPrimary};
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Logo() {
  return (
    <StyledLogo to="/" aria-label="Apex Home">
      <IconWrapper>
        <Zap size={20} fill="currentColor" />
      </IconWrapper>
      <BrandName>Apex</BrandName>
    </StyledLogo>
  );
}

export default Logo;
