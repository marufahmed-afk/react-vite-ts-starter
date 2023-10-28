import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Counter from './pages/Counter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
