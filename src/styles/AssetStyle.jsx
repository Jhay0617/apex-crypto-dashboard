import styled from "styled-components";

export const AssetLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const SectionCard = styled.section`
  background: ${(props) => props.theme.colors.surface}CC;
  backdrop-filter: blur(12px);
  font-size: 16px;
  padding: 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  &:last-child {
    border: none;
  }
`;
