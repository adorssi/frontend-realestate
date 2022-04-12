import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './components/HomePage/HomePage';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/property/detail" element={<PropertyDetail />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
