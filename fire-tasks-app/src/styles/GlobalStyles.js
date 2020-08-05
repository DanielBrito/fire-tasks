import { createGlobalStyle } from "styled-components";

import ImageBackground from "../assets/estee-janssens-aQfhbxailCs-unsplash.jpg";

export default createGlobalStyle`
  body {
    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
      url(${ImageBackground});
    background-attachment: fixed;
    background-size: cover;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, button, input{
    border: 0;
    outline: 0;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }

  :root{
    --yellow-firebase: #FFCA28;
    --navy-blue-firebase: #2C384A;
    --orange-firebase: #F57C00;
    --dark-gray: #222;
    --light-yellow: rgba(241, 250, 140, 0.8);
    --white: #fff;

    --background-gradient-primary: rgba(253, 29, 29, 0);
    --background-gradient-secondary: rgba(0, 0, 0, 0.6);

  }
`;
