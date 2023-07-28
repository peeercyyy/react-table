import { Button } from 'antd';
import ReactModal from '../ReactModal';
import { useContext } from 'react';
import ModalContext from '../../ModalContext';
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modalSlices';

const TableActions = () => {
  const { isModalOpen } = useContext(ModalContext);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <Button
        type='primary'
        size='large'
        onClick={handleOpenModal}>
        Добавить
      </Button>
      <ReactModal isOpen={isModalOpen} />
    </>
  );
};

export default TableActions;
