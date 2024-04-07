import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrivateSpace from './components/PrivateSpace';
import './App.css';

const App = () => {
    return (
        <Router> 
            <div className='Link'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/private' element={<PrivateSpace/>} />
            </Routes>
        </Router>
    );
}

export default App;
