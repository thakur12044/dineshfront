// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from './pages/Register';
import Profile from "./pages/Profile";
import Productscat from './pages/Productscat';

function App() {
  return (
   <div>
  <Header/>
  <BrowserRouter>  
  <Routes>
  <Route path='/login' element={<Login/>} /> 
  <Route path='/Register' element={<Register/>} /> 
  <Route path='/Productscat/:id' element={<Productscat/>} /> 
  <Route path='/Profile' element={<Profile/>} /> 
  <Route path='/' element={<Home/>} /> 
  </Routes>
  </BrowserRouter>
  <Footer/>
   </div>
  );
}

export default App;