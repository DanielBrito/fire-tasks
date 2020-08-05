import styled from "styled-components";
import { Fire } from "styled-icons/heroicons-solid";
// @styled-icons/heroicons-solid/Fire

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  font-size: 3em;
  letter-spacing: 0.1em;
  font-weight: normal;
  color: var(--red);
  font-family: "Gochi Hand", cursive;
  text-align: center;
  align-content: center;
  padding: 10px 0px 20px 0px;
  background: linear-gradient(
    0deg,
    var(--background-gradient-primary) 0%,
    var(--background-gradient-secondary) 40%
  );
  display: block;
  user-select: none;
`;

export const FireIcon = styled(Fire)`
  width: 25px;
  height: 25px;
  margin: 0 0 5px 20px;
  position: absolute;
  color: var(--yellow-firebase);
`;
