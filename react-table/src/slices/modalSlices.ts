import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from './types';

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState) {
      state.isOpen = true;
    },
    openToEditDataModal(state: ModalState) {
      state.isOpen = true;
    },
    closeModal(state: ModalState) {
      state.isOpen = false;
      state.tableDataId = '';
    },
  },
});

export const { openModal, openToEditDataModal, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
