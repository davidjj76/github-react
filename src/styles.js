import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }

  body {
    font-family: 'Roboto';
    font-size: 100%;
    margin: 0;
  }
`;
