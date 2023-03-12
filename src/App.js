import './App.css';
import {Routes, Route} from 'react-router-dom'
import Preferences from './Preferences'
import LandingPage from './LandingPage';
import HomePage from './Components/HomePage';
import EditProfile from './Components/EditProfile';
import Influncers from './Components/Influncers';
import Notification from './Components/Notification';
import SignIn from './Components/SignIn';
import SearchLocations from './Components/SearchLocations';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="influncers" element={<Influncers />} />
        <Route path="notification" element={<Notification />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SearchLocations" element={<SearchLocations />} />

    </Routes>
  );
}

export default App;
