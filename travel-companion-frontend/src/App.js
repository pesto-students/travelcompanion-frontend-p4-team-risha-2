import './App.css';
import {Routes, Route} from 'react-router-dom'
import Preferences from './Preferences'
import LandingPage from './LandingPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="homePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
