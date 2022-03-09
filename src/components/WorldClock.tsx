import Clock from 'react-live-clock';

const WorldClock = () => {
  const timezones = [
    { city: 'Los Angeles', timezone: 'US/Pacific' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' }
  ];

  const clocks = timezones.map(({ city, timezone }) => {
    return {
      city,
      time: <Clock format={'HH:mm'} ticking={true} timezone={timezone} />
    };
  });

  return (
    <div className="my-4">
      <h2>World Clock:</h2>
      {clocks.map(({ city, time }, id) => {
        return (
          <p key={id}>
            {city}: {time}
          </p>
        );
      })}
    </div>
  );
};

export default WorldClock;
