import { useSelector } from 'react-redux';
import './App.css';
import ReactTable from './Components/ReactTable';
import TableActions from './Components/TableActions';
import { State } from './store/rootReducer';
import ModalContext from './ModalContext';
function App() {
  const modalState = useSelector((state: State) => state.modalState);
  return (
    <div>
      <ModalContext.Provider value={{ isModalOpen: modalState.isOpen }}>
        <TableActions />
        <ReactTable />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
