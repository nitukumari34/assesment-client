import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import SearchResults from './components/search/Search';
import Home from './pages/home/Home';
import BreweryDetails from './components/brewery/BreweryDetails';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/search" element={<SearchResults/>} />
      <Route path="/brewery/:id" element={<BreweryDetails/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
