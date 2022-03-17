import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import {
  SelectionState,
  SortingState,
  IntegratedSorting,
  SearchState,
  FilteringState,
  IntegratedFiltering,
  SummaryState,
  IntegratedSummary
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Toolbar,
  SearchPanel,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableSelection,
  TableSummaryRow
} from '@devexpress/dx-react-grid-material-ui';
import { Card } from 'react-bootstrap';

import { TrainScheduleWrapper } from '../styled';
import { refineDisplayName } from '../utils/typographyRefiners';

interface Train {
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
  const [selection, setSelection] = useState<(string | number)[]>([]);

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
  }, []);

  return (
    <TrainScheduleWrapper>
      <Card className="train-schedule-card">
        <Card.Title className="display-4">
          Local Train Station Timetable
        </Card.Title>
        <Card.Body>
          <Paper>
            <Grid rows={trainList} columns={columns}>
              <SelectionState
                selection={selection}
                onSelectionChange={setSelection}
              />
              <SortingState
                defaultSorting={[{ columnName: 'arrival', direction: 'asc' }]}
              />
              <IntegratedSorting />
              <FilteringState />
              <SearchState />
              <IntegratedFiltering />
              <SummaryState
                totalItems={[{ columnName: 'type', type: 'count' }]}
              />
              <IntegratedSummary />
              <Table
                columnExtensions={[{ columnName: 'amount', align: 'right' }]}
              />
              <TableHeaderRow showSortingControls />
              <TableSelection selectByRowClick />
              <TableFilterRow />
              <TableSummaryRow />
              <Toolbar />
              <SearchPanel />
            </Grid>
          </Paper>
        </Card.Body>
      </Card>
    </TrainScheduleWrapper>
  );
};

export default TrainSchedule;
