import { Button } from 'antd';
import ReactModal from '../ReactModal';
import { useContext } from 'react';
import ModalContext from '../../ModalContext';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../slices/modalSlices';

const TableActions = () => {
  const { isModalOpen } = useContext(ModalContext);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Button
        type='primary'
        size='large'
        onClick={handleOpenModal}>
        Добавить
      </Button>
      <ReactModal
        isOpen={isModalOpen}
        onCancel={handleCloseModal}
      />
    </>
  );
};

export default TableActions;
