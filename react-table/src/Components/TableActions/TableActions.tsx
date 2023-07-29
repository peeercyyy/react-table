import { Button, Col, Row } from 'antd';
import ReactModal from '../ReactModal';
import React, { useContext } from 'react';
import ModalContext from '../../ModalContext';
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modalSlices';
import Search from 'antd/es/input/Search';
import { setSearch } from '../../slices/searchSlices';

const TableActions = () => {
  const { isModalOpen } = useContext(ModalContext);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch({ search: e.target.value }));
  };

  const handleSearch = (value: string) => {
    dispatch(setSearch({ search: value }));
  };

  return (
    <Row
      justify='space-between'
      style={{ marginBottom: '20px' }}>
      <Col>
        <Search
          placeholder='Поиск'
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
      </Col>
      <Col>
        <Button
          type='primary'
          size='large'
          onClick={handleOpenModal}>
          Добавить
        </Button>
      </Col>
      <ReactModal isOpen={isModalOpen} />
    </Row>
  );
};

export default TableActions;
