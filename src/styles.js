import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    color: rgba(0, 0, 0, .87);
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
