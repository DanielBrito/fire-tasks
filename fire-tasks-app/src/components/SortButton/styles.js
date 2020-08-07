import styled from "styled-components";
import { Sort } from "styled-icons/boxicons-regular";

export const Button = styled.button`
  width: 100%;
  max-width: 170px;
  background-color: var(--light-blue-firebase);
  font-size: 1.1em;
  color: var(--white);
  padding: 5px;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: var(--light-blue-hover-firebase);
    transition: 0.2s ease-in;
    transform: scale(1.02, 1.02);
  }
`;

export const SortIcon = styled(Sort)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: var(--white);
`;
