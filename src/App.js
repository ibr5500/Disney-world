import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
