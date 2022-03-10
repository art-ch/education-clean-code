import styled from 'styled-components';

const BankCardWrapper = styled.article`
  .bank-card {
    width: 323.52px;
    height: 204px;
    background: black;
    color: white;
    .bank-card__bank-credits {
      gap: 2rem;
      .bank-credit-item {
        padding: 0;
      }
    }
    .bank-card__expiration-date,
    .expiration-date__headers {
      display: flex;
    }
    .bank-card__expiration-date {
      p {
        margin-bottom: 0;
      }
    }
    .expires,
    .expiration-date__headers {
      font-size: 8px;
    }
    .expires {
      align-self: end;
      margin-bottom: 6px;
    }
    .expiration-date__headers {
      gap: 2px;
    }
  }
`;

export default BankCardWrapper;
