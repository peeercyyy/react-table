import { combineReducers } from '@reduxjs/toolkit';
import tableDataReducer from '../slices/tableDataSlices';
import modalReducer from '../slices/modalSlices';
import searchReducer from '../slices/searchSlices';

const rootReducer = combineReducers({
  tableData: tableDataReducer,
  modalState: modalReducer,
  searchState: searchReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
