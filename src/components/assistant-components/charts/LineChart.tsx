import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart = () => {
  return (
    <div>
      <Card>
        <Card.Title>Preferable Time To Board</Card.Title>
        <Card.Body>
          <Line
            data={{
              labels: ['Night', 'Morning', 'Evening'],
              datasets: [
                {
                  label: '%',
                  data: [100, 20, 70],
                  backgroundColor: 'rgba(255, 99, 132, 1)',
                  borderColor: 'rgba(255, 99, 132, 0.2)'
                }
              ]
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }}
            height={5}
            width={10}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default LineChart;
