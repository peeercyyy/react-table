import { DatePicker, Form, Input, InputNumber } from 'antd';
import { ModalFormProps } from './types';

const ModalForm = ({ form }: ModalFormProps) => {
  const dateFormat = 'DD.MM.YYYY';
  return (
    <Form
      name='dataForm'
      form={form}
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
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item
        label='Числовое значение'
        name='number'
        rules={[{ required: true, message: 'Введите число' }]}>
        <InputNumber />
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
