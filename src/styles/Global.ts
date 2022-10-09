import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;

    --gray-100: #F2F2F2;
    --gray-500: #919191;
    --gray-800: #313131;

    /* Elements */
    --bug: #729f3f;

    --dark: #707070;
    --dragon-1: #53a4cf;
    --dragon-2: #f16e57;

    --electric: #eed535;

    --fairy: #fdb9e9;
    --fighting: #d56723;
    --fire: #fd7d24;
    --flying-1: #3dc7ef;
    --flying-2: #bdb9b8;
    
    --ghost: #7b62a3;
    --grass: #9bcc50;
    --ground-1: #f7de3f;
    --ground-2: #ab9842;

    --ice: #51c4e7;

    --normal: #a4acaf;
    
    --poison: #b97fc9;
    --psychic: #f366b9;

    --rock: #a38c21;

    --steel: #9eb7b8;

    --water: #4592c4;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: var(--white);
    color: var(--gray-800);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Exo', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, a{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--gray-800);
  }
`
