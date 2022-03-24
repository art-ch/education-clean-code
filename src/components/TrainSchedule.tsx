import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

import {
  TimeTable,
  TimeTableCharts
} from './assistant-components/TrainSchedule-components';

import { TrainScheduleWrapper } from '../styled';
import { refineDisplayName } from '../utils/typographyRefiners';

export interface Train {
  type: string;
  id: string;
  origin: string;
  arrival: string;
  stopTime: string;
  departure: string;
  schedule: string;
}

interface TableColumn {
  name: string;
  title: string;
}

const TrainSchedule = () => {
  const [trainList, setTrainList] = useState<Train[]>([]);
  const [columns, setColumns] = useState<TableColumn[]>([]);

  const generateColumns = (data: Train[]) => {
    const columnNames = Object.keys(data[0]);

    const columns = columnNames.map((columnName) => {
      return { name: columnName, title: refineDisplayName(columnName) };
    });

    return columns;
  };

  useEffect(() => {
    const fetchTrains = async () => {
      const { data } = await axios('https://demo0733949.mockable.io/trains');

      setColumns(generateColumns(data));
      setTrainList(data);
    };

    fetchTrains();

    return () => {
      setTrainList([]);
    };
  }, []);

  return (
    <TrainScheduleWrapper>
      <Card className="train-schedule-card">
        <Card.Title className="display-4">
          Local Train Station Timetable
        </Card.Title>
        <Card.Subtitle>React Grid &amp; Chart.js</Card.Subtitle>
        <Card.Body>
          <TimeTable trainList={trainList} columns={columns} />
          <TimeTableCharts />
        </Card.Body>
      </Card>
    </TrainScheduleWrapper>
  );
};

export default TrainSchedule;
