import styled from "styled-components";

import { Close } from "styled-icons/material";
import { EditAlt } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  padding: 20px;
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  font-size: 1.1em;
  color: var(--dark-gray);
  background-color: var(--light-yellow-firebase);
  border-radius: 3px;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.15);
`;

export const RemoveButton = styled(Close)`
  background-color: var(--orange-firebase);
  border-radius: 50%;
  color: var(--white);
  padding: 5px;
  width: 30px;
  height: 30px;
  float: right;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: var(--orange-hover-firebase);
    transition: 0.2s ease-in;
  }
`;

export const EditButton = styled(EditAlt)`
  background-color: var(--orange-firebase);
  border-radius: 50%;
  color: var(--white);
  padding: 5px;
  margin: 0px 10px 0 0;
  width: 30px;
  height: 30px;
  float: right;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: var(--orange-hover-firebase);
    transition: 0.2s ease-in;
  }
`;

export const Description = styled.p`
  margin-top: 5px;
  padding: 0 85px 0 50px;
  word-wrap: break-word;
`;

export const PriorityLabel = styled.span`
  background-color: var(--light-blue-firebase);
  border-radius: 50%;
  color: var(--white);
  font-weight: bold;
  text-align: center;
  font-size: 1em;
  padding: 5px;
  width: 30px;
  height: 30px;
  float: left;
  user-select: none;
`;
