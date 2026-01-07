import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const TableWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
`;

export const TBody = styled.tbody`
  & tr:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  /* Media Query Logic */
  .mobile-hide {
    @media (max-width: 600px) {
      display: none;
    }
  }
  .tablet-hide {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const PriceChange = styled.span`
  color: ${(props) =>
    props.isPositive ? props.theme.colors.profit : props.theme.colors.loss};
  font-weight: 600;
`;

export const CoinIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;

export const NameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
export const THead = styled.thead`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  & th {
    padding: 1.6rem;
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-align: left;
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      text-align: right;
    }
  }
`;

export const TableData = styled.td`
  padding: 1.6rem;
  vertical-align: middle;
  text-align: left;

  &:nth-child(1) {
    width: 50px;
    text-align: center;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    text-align: right;
  }
`;

export const WatchlistButton = styled.button`
  color: ${(props) =>
    props.isWatchlisted
      ? props.theme.colors.accent
      : props.theme.colors.textSecondary};
  opacity: ${(props) => (props.isWatchlisted ? 1 : 0.4)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  transition: opacity 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.colors.accent};
  }
`;
