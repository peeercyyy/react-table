import { Form, Modal } from 'antd';
import ModalForm from '../ModalForm';
import { ChildrenProps, FormValues } from './types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addData,
  tableDataSelectors,
  updateData,
} from '../../slices/tableDataSlices';
import { uniqueId } from 'lodash';
import { State } from '../../store/rootReducer';
import { useEffect } from 'react';
import store from '../../store/store';
import dayjs from 'dayjs';
import { closeModal } from '../../slices/modalSlices';

const normalizeFormValues = (values: FormValues) => {
  const { name, date, number } = values;
  return { name, date: date.toString(), number };
};

const ReactModal = ({ isOpen }: ChildrenProps) => {
  const state = store.getState();
  const dispatch = useDispatch();
  const tableDataId = useSelector(
    (state: State) => state.modalState.tableDataId
  );
  const [form] = Form.useForm();

  useEffect(() => {
    if (tableDataId !== '0') {
      const tableData = tableDataSelectors.selectById(state, tableDataId);
      if (tableData) {
        const dayjsFormatDate = dayjs(tableData.date);
        form.setFieldsValue({
          name: tableData.name,
          date: dayjsFormatDate,
          number: tableData.number,
        });
      }
    } else {
      form.resetFields();
    }
  }, [tableDataId, state, form]);

  const handleOnOk = () => {
    form.validateFields().then((values) => {
      const normalizedValues = normalizeFormValues(values);
      if (tableDataId === '0') {
        dispatch(addData({ id: uniqueId(), ...normalizedValues }));
      } else {
        dispatch(updateData({ id: tableDataId, changes: normalizedValues }));
      }
      handleCancelModal();
    });
  };

  const handleCancelModal = () => {
    dispatch(closeModal());
    form.resetFields();
  };

  const okText = tableDataId === '0' ? 'Добавить' : 'Изменить';

  return (
    <Modal
      title='Ввод данных'
      open={isOpen}
      onCancel={handleCancelModal}
      cancelText='Отмена'
      okText={okText}
      onOk={handleOnOk}>
      <ModalForm form={form} />
    </Modal>
  );
};

export default ReactModal;
