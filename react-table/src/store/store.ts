import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from '../slices/tableDataSlices';

const store = configureStore({
  reducer: {
    tableData: tableDataReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export default store;
