import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/services" Component={Services}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/sign-up" Component={SignUp}></Route>
        </Routes>
      </Router>
      
      </>
  );
}

export default App;
