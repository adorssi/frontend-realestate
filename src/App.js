import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
