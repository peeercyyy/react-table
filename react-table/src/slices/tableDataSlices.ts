import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { TableData } from './types';

const tableDataAdapter = createEntityAdapter<TableData>();
const initialState = tableDataAdapter.getInitialState();

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    addData: tableDataAdapter.addOne,
    deleteData: tableDataAdapter.removeOne,
    updateData: tableDataAdapter.updateOne,
  },
});

export const { addData, deleteData, updateData } = tableDataSlice.actions;
export const tableDataSelectors = tableDataAdapter.getSelectors(
  (state: State) => state.tableData
);
export default tableDataSlice.reducer;
