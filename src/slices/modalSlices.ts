import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalState } from './types';

const initialState: ModalState = {
  isOpen: false,
  tableDataId: '0',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState) {
      state.isOpen = true;
    },
    openToEditDataModal(
      state: ModalState,
      action: PayloadAction<{ id: string }>
    ) {
      const { id } = action.payload;
      state.isOpen = true;
      state.tableDataId = id;
    },
    closeModal(state: ModalState) {
      state.isOpen = false;
      state.tableDataId = '0';
    },
  },
});

export const { openModal, openToEditDataModal, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
