import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

section {
  max-width: 1170px;
  margin: 3rem auto;
}

.card-header {
    padding: 0;
    .card-header__alert {
      margin-bottom: 0;
    }
  }

.card-title, .card-subtitle {
    font-weight: 500;
}
`;

export default GlobalStyle;
