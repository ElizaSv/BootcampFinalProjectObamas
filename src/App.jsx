import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import FrontPage from './pages/frontPage/FrontPage';
import RegisterPage from './pages/registerPage/RegisterPage'; 
import LoginPage from './pages/loginPage/LoginPage';
import ContextProvider from './Context';

function App() {
 return (
   <ContextProvider>
     <Router>
       <Routes>
         <Route path="/" element={<FrontPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
       </Routes>
     </Router>
   </ContextProvider>
 );
}

export default App;


