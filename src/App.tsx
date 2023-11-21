import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
