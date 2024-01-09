import './config/axios.config';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './routing/AppRouting';
import Header from './common/header';
import { ToastContainer } from 'react-toastify';
import { Menu } from './components/Menu/Menu';
import { Suspense } from 'react';

function App() {
  return (
    <>
    {/* <Suspense fallback='loading'> */}
      <BrowserRouter>

       <ToastContainer />
        <Header />
        <AppRouting />
      </BrowserRouter>
      {/* </Suspense> */}
    </>
  );
}

export default App;
