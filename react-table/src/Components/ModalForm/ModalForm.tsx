import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';

const ModalForm: React.FC = () => {
  return (
    <Form
      name='dataForm'
      autoComplete='off'>
      <Form.Item
        label='Имя'
        name='name'
        rules={[{ required: true, message: 'Введите имя' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label='Дата'
        name='date'
        rules={[{ required: true, message: 'Выберите дату' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label='Числовое значение'
        name='number'
        rules={[{ required: true, message: 'Введите число' }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'>
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
