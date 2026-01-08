import styled from "styled-components";

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NewsCard = styled.article`
  background: ${(props) => props.theme.colors.surface};
  padding: 2.4rem;
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
    transform: translateY(-4px);
  }
`;
