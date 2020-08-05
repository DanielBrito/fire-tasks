import styled from "styled-components";
import { LocalFireDepartment } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  font-size: 2.2em;
  color: var(--orange-firebase);
  font-family: "Gochi Hand", cursive;
  text-align: center;
  align-content: center;
  padding: 5px 0px 20px 0px;
  margin: 6px 0px;
  background: linear-gradient(
    0deg,
    var(--background-gradient-primary) 0%,
    var(--background-gradient-secondary) 40%
  );
  display: block;
`;

export const FireIcon = styled(LocalFireDepartment)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: var(--yellow-firebase);
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
`;
