import styled from "styled-components";

import { Add } from "styled-icons/material";

export const Container = styled.div`
  padding: 20px;
  height: auto;
  margin: auto;
  margin-bottom: 15px;
  width: 100%;
  max-width: 800px;
  font-size: 1.1em;
  color: var(--dark-gray);
  background-color: var(--orange-firebase);
  border-radius: 3px;
  display: flex;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.15);
`;

export const AddButton = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  padding: 8px 10px;
  background-color: var(--light-blue-firebase);
  color: var(--white);
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: var(--light-blue-hover-firebase);
    color: var(--white);
    transition: 0.2s ease-out;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.1em;
  padding: 0px 10px;
  border-radius: 5px;
  background-color: var(--white);
  transition: 0.2s ease-out;

  &:focus {
    color: var(--dark-gray);
    transition: 0.2s ease-in;
  }
`;

export const PrioritySelector = styled.select`
  height: 40px;
  width: 130px;
  min-width: 130px;
  font-size: 0.95em;
  padding-left: 5px;
  border-radius: 5px;
  background-color: var(--white);
  color: var(--dark-gray);
  margin-left: 10px;

  option {
    font-size: 0.9em;
  }
`;

export const AddIcon = styled(Add)`
  width: 25px;
  height: 25px;
`;
