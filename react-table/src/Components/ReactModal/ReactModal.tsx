import { Modal } from 'antd';
import { ChildrenProps } from './types';

const ReactModal = ({ children, isOpen, isClose }: ChildrenProps) => {
  return (
    <Modal
      title='Ввод данных'
      open={isOpen}
      onCancel={isClose}>
      {children}
    </Modal>
  );
};

export default ReactModal;
