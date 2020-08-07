import React from "react";

import { Container, Logo, FireIcon } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        <span>
          <a
            href="https://github.com/DanielBrito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FireIcon title="Developed with &hearts; by Daniel Brito" />
          </a>
          Fire Tasks
        </span>
      </Logo>
    </Container>
  );
};

export default Header;
