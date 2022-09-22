import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import FrontPage from './pages/frontPage/FrontPage';
import RegisterPage from './pages/registerPage/RegisterPage'; 
import LoginPage from './pages/loginPage/LoginPage';
import MapPage from './pages/mapPage/MapPage';
import SubmitEventPage from './pages/submitEventPage/submitEventPage';
import ContextProvider from './Context';

function App() {
 return (
   <ContextProvider>
     <Router>
       <Routes>
         <Route path="/" element={<FrontPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path='/map' element={<MapPage/>} />
         <Route path='/submit' element={<SubmitEventPage/>} />
       </Routes>
     </Router>
   </ContextProvider>
 );
}

export default App;


