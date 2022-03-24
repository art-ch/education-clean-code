import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = () => {
  return (
    <div>
      <Card>
        <Card.Title>Amount Of Trains By Time Of The Day</Card.Title>
        <Card.Body>
          <Bar
            data={{
              labels: ['Night', 'Morning', 'Evening'],
              datasets: [
                {
                  label: '# of Trains',
                  data: [1, 4, 6],
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                  ],
                  borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                  ],
                  borderWidth: 1
                }
              ]
            }}
            height={5}
            width={10}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default BarChart;
