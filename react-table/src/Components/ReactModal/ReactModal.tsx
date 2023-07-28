import { Form, Modal } from 'antd';
import ModalForm from '../ModalForm';
import { ChildrenProps, FormValues } from './types';
import { useDispatch } from 'react-redux';
import { addData } from '../../slices/tableDataSlices';
import { uniqueId } from 'lodash';

const normalizeFormValues = (values: FormValues) => {
  const { name, date, number } = values;
  return { id: uniqueId(), name, date: date.toString(), number };
};

const ReactModal = ({ isOpen, onCancel }: ChildrenProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleOnOk = () => {
    form.validateFields().then((values) => {
      dispatch(addData(normalizeFormValues(values)));
      form.resetFields();
    });
  };
  return (
    <Modal
      title='Ввод данных'
      open={isOpen}
      onCancel={onCancel}
      cancelText='Отмена'
      okText='Добавить'
      onOk={handleOnOk}>
      <ModalForm form={form} />
    </Modal>
  );
};

export default ReactModal;
