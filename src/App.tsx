import { Header } from './components/Header';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='h-screen w-screen bg-neutral-950'>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
