import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const tableDataAdapter = createEntityAdapter();
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
export default tableDataSlice.reducer;
