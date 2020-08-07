import styled from "styled-components";
import { Fire } from "styled-icons/heroicons-solid";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    var(--background-gradient-primary) 0%,
    var(--background-gradient-secondary) 40%
  );
  user-select: none;

  > span {
    font-size: 3em;
    letter-spacing: 0.1em;
    font-weight: normal;
    color: var(--red);
    font-family: "Gochi Hand", cursive;
    text-align: center;
    align-content: center;
    padding: 10px 0px 20px 0px;

    &:hover {
      text-shadow: 1px 1px 2px var(--yellow-firebase);
    }
  }
`;

export const FireIcon = styled(Fire)`
  width: 25px;
  height: 25px;
  margin: 0 0 5px 20px;
  position: absolute;
  color: var(--yellow-firebase);

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
