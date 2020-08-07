import styled from "styled-components";
import { Fire } from "styled-icons/heroicons-solid";
import { Sort } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
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

export const SortButton = styled.button`
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
    transform: scale(1.05, 1.05);
  }
`;

export const SortIcon = styled(Sort)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: var(--white);
`;
