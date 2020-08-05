import styled from "styled-components";
import { Close } from "styled-icons/material";
import { EditAlt } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  padding: 20px;
  height: auto;
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  color: var(--dark-gray);
  background-color: var(--light-yellow);
  border-radius: 3px;
  box-shadow: 43x 3px 2px var(--dark-gray);
  opacity: 1;
`;

export const RemoveButton = styled(Close)`
  background-color: var(--orange-firebase);
  border-radius: 50%;
  color: var(--yellow-firebase);
  padding: 5px;
  width: 30px;
  height: 30px;
  float: right;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const EditButton = styled(EditAlt)`
  background-color: var(--orange-firebase);
  border-radius: 50%;
  color: var(--yellow-firebase);
  padding: 5px;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  float: right;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const Description = styled.p`
  padding: 0px 50px;
  word-wrap: break-word;
`;

export const Priority = styled.span`
  background-color: var(--yellow-firebase);
  border-radius: 50%;
  color: var(--dark-gray);
  font-weight: bold;
  text-align: center;
  font-size: 1em;
  padding: 5px;
  width: 30px;
  height: 30px;
  float: left;
`;
