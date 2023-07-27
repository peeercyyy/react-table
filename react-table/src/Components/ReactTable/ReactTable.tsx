import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from './types';

const ReactTable: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
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
  return <Table columns={columns}></Table>;
};

export default ReactTable;
