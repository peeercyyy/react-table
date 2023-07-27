import { Button } from 'antd';
import ReactModal from '../ReactModal';
import ModalForm from '../ModalForm';
import { useState } from 'react';

const TableActions = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
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
        isOpen={isOpenModal}
        isClose={handleCloseModal}>
        <ModalForm />
      </ReactModal>
    </>
  );
};

export default TableActions;
