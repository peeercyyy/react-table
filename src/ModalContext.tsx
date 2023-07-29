import { createContext } from 'react';

const ModalContext = createContext({
  isModalOpen: false,
});

export default ModalContext;
