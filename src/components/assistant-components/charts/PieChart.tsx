import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.tooltip.enabled = false;

const PieChart = () => {
  return (
    <div>
      <Card>
        <Card.Title>Amount Of Trains By Type</Card.Title>
        <Card.Body>
          <Pie
            data={{
              labels: ['Local', 'Passenger'],
              datasets: [
                {
                  label: '%',
                  data: [2, 9],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                  ]
                }
              ]
            }}
            options={{
              animation: false
            }}
            height={5}
            width={10}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PieChart;
