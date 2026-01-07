import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCurrency, setCurrency } from "../store/preferencesSlice";

const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  font-family: "Geist Mono", monospace;
  font-size: 1.4rem;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

function CurrencyToggle() {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(selectCurrentCurrency);

  const handleChange = (event) => {
    dispatch(setCurrency(event.target.value));
  };

  return (
    <StyledSelect
      value={currentCurrency}
      onChange={handleChange}
      aria-label="Select Currency"
    >
      <option value="usd">USD ($)</option>
      <option value="eur">EUR (€)</option>
      <option value="php">PHP (₱)</option>
    </StyledSelect>
  );
}

export default CurrencyToggle;
