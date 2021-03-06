import { createGlobalStyle } from "styled-components";

import ImageBackground from "../assets/estee-janssens-aQfhbxailCs-unsplash.jpg";

export default createGlobalStyle`
  body {
    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
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
    --light-yellow-firebase: #FFCA28BB;
    --navy-blue-firebase: #2C384A;
    --navy-blue-hover-firebase: #1f3841;
    --orange-firebase: #F57C00;
    --orange-hover-firebase: #ff5722;
    --dark-gray: #222;
    --light-blue-firebase: #039BE5;
    --light-blue-hover-firebase: #056bf9;
    --white: #fff;
    --white-transparent: rgba(255, 255, 255, 0.8);
    --light-gray: rgba(255, 255, 255, 0.4);
    --red: #d92027;
    --red-hover: #af101f;

    --background-gradient-primary: rgba(253, 29, 29, 0);
    --background-gradient-secondary: rgba(0, 0, 0, 0.6)
  }

  ::-webkit-scrollbar{
    width: 15px;
  }

  ::-webkit-scrollbar-track{
    background-color: rgba(0, 0, 0, 0.7)
  }

  ::-webkit-scrollbar-thumb{
    background: var(--dark-gray);
    border-radius: 10px;
  }
`;
