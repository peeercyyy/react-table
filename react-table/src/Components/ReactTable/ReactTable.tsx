import React from 'react';
import { Button, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, tableDataSelectors } from '../../slices/tableDataSlices';
import { openToEditDataModal } from '../../slices/modalSlices';
import { TableData } from '../../slices/types';

const ReactTable: React.FC = () => {
  const tableData = useSelector(tableDataSelectors.selectAll);
  const dispatch = useDispatch();
  const editData = (id: string) => () => {
    dispatch(openToEditDataModal({ id }));
  };
  const deleteTableData = (id: string) => () => {
    dispatch(deleteData(id));
  };
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => new Date(date).toLocaleDateString('ru-RU'),
      sorter: (a: TableData, b: TableData) =>
        Date.parse(a.date) - Date.parse(b.date),
    },
    {
      title: 'Числовое значение',
      dataIndex: 'number',
      key: 'number',
      sorter: (a: TableData, b: TableData) => a.number - b.number,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: string, record: TableData) => (
        <Space size='middle'>
          <Button
            size='small'
            onClick={editData(record.id)}>
            Редактировать
          </Button>
          <Button
            size='small'
            onClick={deleteTableData(record.id)}>
            Удалить
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      rowKey={'id'}
    />
  );
};

export default ReactTable;
