import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from '../slices/tableDataSlices';

const store = configureStore({
  reducer: tableDataReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export default store;
