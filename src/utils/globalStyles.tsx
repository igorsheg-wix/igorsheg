import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0; 
  padding: 0; 
  border: 0; 
  background-repeat: no-repeat; 
  box-sizing: inherit; 
}


html {
  -ms-text-size-adjust: 100%; 
  -webkit-text-size-adjust: 100%; 
  box-sizing: border-box; 
  scroll-behavior: auto; 
  background: ${theme.$D10};
  color: ${theme.$D80};
  font-family: 'Inter', sans-serif;
}
@supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }


body {
  font-size: 16px; 
  -moz-osx-font-smoothing: grayscale; 
  -webkit-font-smoothing: antialiased; 
}


h1,
h2,
h3,
h4,
h5 {
  font-size: 1em;
  font-weight: normal;
}

h1,h2,h3 {
    font-weight: 600;
}


a {
  text-decoration: none; 
  color: inherit; 
  display: inline-block; 
  background-color: transparent; 
}


ol,
ul {
  list-style: none;
}


button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: visible;
  border: 0;
  outline: 0;
  font: inherit;
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  vertical-align: top;
}


option {
  background-color: inherit;
}


a:active,
button:active {
  color: inherit;
}


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
  -webkit-transition-delay: 9999s;
  transition: "color 9999s ease-out, background-color 9999s ease-out";
  transition-delay: 9999s;
}


textarea {
  resize: none;
}


input[type="button"],
button {
  cursor: pointer;
}


button[disabled],
html input[disabled] {
  cursor: default;
}


img {
  display: block; 
  max-width: 100%; 
  height: auto; 
  border-style: none; 
}


table {
  border-collapse: collapse;
}
`;

export default GlobalStyles;
