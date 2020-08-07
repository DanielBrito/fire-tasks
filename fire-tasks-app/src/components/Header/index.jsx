import React from "react";

import { Container, Logo, FireIcon } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        <span>
          <FireIcon />
          Fire Tasks
        </span>
      </Logo>
    </Container>
  );
};

export default Header;
