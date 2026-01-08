import styled from "styled-components";
const gridTemplate = "5rem 5rem 1.5fr 14rem 12rem 18rem";

const tabletTemplate = "5rem 5rem 1.5fr 12rem 10rem";

const mobileTemplate = "5rem 5rem 1fr 10rem";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  background-color: ${(props) => props.theme.colors.background};
`;

export const TableWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: ${gridTemplate};
  padding: 1.6rem 2.4rem;
  background-color: rgba(255, 255, 255, 0.02);
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1px;

  & div:nth-child(4),
  & div:nth-child(5),
  & div:nth-child(6) {
    text-align: right;
  }

  @media (max-width: 1024px) {
    grid-template-columns: ${tabletTemplate};
    .tablet-hide {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: ${mobileTemplate};
    .mobile-hide {
      display: none;
    }
  }
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: ${gridTemplate};
  padding: 1.6rem 2.4rem;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }

  & div:nth-child(4),
  & div:nth-child(5),
  & div:nth-child(6) {
    text-align: right;
  }

  @media (max-width: 1024px) {
    grid-template-columns: ${tabletTemplate};
    .tablet-hide {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: ${mobileTemplate};
    .mobile-hide {
      display: none;
    }
  }
`;

export const Cell = styled.div`
  font-size: 1.4rem;
  font-family: "Geist Mono", monospace;

  &.price-font {
    font-family: "JetBrains Mono", monospace;
    font-variant-numeric: tabular-nums;
  }
`;

export const WatchlistButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  color: ${(props) =>
    props.isWatchlisted
      ? props.theme.colors.accent
      : props.theme.colors.textSecondary};

  &:hover {
    background-color: rgba(56, 189, 248, 0.1);
    color: ${(props) => props.theme.colors.accent};
    transform: scale(1.1);
  }

  & svg {
    fill: ${(props) =>
      props.isWatchlisted ? props.theme.colors.accent : "none"};
    transition: fill 0.2s ease;
  }
`;

export const PriceChange = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;

  color: ${(props) =>
    props.isPositive ? props.theme.colors.profit : props.theme.colors.loss};

  &::before {
    content: "${(props) => (props.isPositive ? "▲" : "▼")}";
    margin-right: 0.4rem;
    font-size: 0.8rem;
    vertical-align: middle;
  }
`;
