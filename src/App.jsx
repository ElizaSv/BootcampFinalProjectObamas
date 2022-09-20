import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import FrontPage from './components/frontPage/FrontPage';
import RegisterPage from './pages/registerPage/RegisterPage'; 
import LoginPage from './pages/loginPage/LoginPage';

function App() {
 return (
    <Router>
      <Routes>  
        <Route path="/" element={<FrontPage />} />
      </Routes>

    </Router>
   
  )
}

export default App;


