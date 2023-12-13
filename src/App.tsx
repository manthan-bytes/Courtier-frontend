import './config/axios.config';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './routing/AppRouting';
import Header from './common/header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
       <ToastContainer />
        <Header />
        <AppRouting />
      </BrowserRouter>
    </>
  );
}

export default App;
