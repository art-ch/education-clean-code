import styled from 'styled-components';

const DateWrapper = styled.section`
  .time-info-card {
    background: #90e0ef;
  }

  .card__clock {
    font-weight: bold;
  }
  .card__local-time-clock {
    font-size: 70px;
  }

  .react-calendar {
    margin: 0 auto;
    width: 20rem;
    padding: 10px;
    background: white;
    border-radius: 3px;
    * {
      background: white;
      border: none;
      font-weight: 500;
    }
    .react-calendar__navigation {
      margin-bottom: 1rem;
      .react-calendar__navigation__label {
        font-size: 1.3rem;
      }
      .react-calendar__navigation__arrow {
        margin: 0 1rem;
        font-size: 2rem;
      }
    }
    .react-calendar__month-view__weekdays {
      div:nth-last-child(-n + 2) {
        color: red;
      }
      abbr {
        text-decoration: none;
      }
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: gray;
    }
    .react-calendar__tile--now {
      background: #0096c7;
      border-radius: 3px;
      abbr {
        color: white;
        background: #0096c7;
      }
    }
  }

  .card__world-clock {
    font-size: 40px;
    background: white;
  }
`;

export default DateWrapper;
