import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path='/home' exact Component={Home} />
              <Route path='/cart' Component={Cart} />
              <Route path='/' Component={Login} />
              <Route path='/signup' Component={SignUp} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
