import { useState } from 'react';

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

import { Train } from '../../TrainSchedule';
import { Column } from '@devexpress/dx-react-grid';

interface TimeTableProps {
  trainList: Train[];
  columns: Column[];
}

const TimeTable = ({ trainList, columns }: TimeTableProps) => {
  const [selection, setSelection] = useState<(string | number)[]>([]);

  return (
    <Paper component="article">
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
        <SummaryState totalItems={[{ columnName: 'type', type: 'count' }]} />
        <IntegratedSummary />
        <Table columnExtensions={[{ columnName: 'amount', align: 'right' }]} />
        <TableHeaderRow showSortingControls />
        <TableSelection selectByRowClick />
        <TableFilterRow />
        <TableSummaryRow />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );
};

export default TimeTable;
