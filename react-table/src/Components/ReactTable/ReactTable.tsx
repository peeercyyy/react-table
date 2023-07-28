import React from 'react';
import { Space, Table } from 'antd';
import { useSelector } from 'react-redux';
import { tableDataSelectors } from '../../slices/tableDataSlices';

const ReactTable: React.FC = () => {
  const tableData = useSelector(tableDataSelectors.selectAll);
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
    },
    {
      title: 'Числовое значение',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <Space size='middle'>
          <a>Редактировать</a>
          <a>Удалить</a>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      rowKey={'id'}></Table>
  );
};

export default ReactTable;
