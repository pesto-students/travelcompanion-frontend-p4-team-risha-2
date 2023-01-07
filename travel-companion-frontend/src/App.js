import './App.css';
import {Routes, Route} from 'react-router-dom'
import Preferences from './Preferences'
import LandingPage from './LandingPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="preferences" element={<Preferences />} />
    </Routes>
  );
}

export default App;
