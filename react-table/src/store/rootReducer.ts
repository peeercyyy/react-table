import { combineReducers } from '@reduxjs/toolkit';
import tableDataReducer from '../slices/tableDataSlices';
import modalReducer from '../slices/modalSlices';

const rootReducer = combineReducers({
  tableData: tableDataReducer,
  modalState: modalReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
