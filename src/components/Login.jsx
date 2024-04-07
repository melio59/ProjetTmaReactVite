import React, { useState } from 'react';
import '../styles/login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyDq48yJsINIziTYU-N_Oo-k3bBhBZqrFzU",
  authDomain: "tmaauthentification.firebaseapp.com",
  projectId: "tmaauthentification",
  storageBucket: "tmaauthentification.appspot.com",
  messagingSenderId: "737942911431",
  appId: "1:737942911431:web:67f486131bc362a79f41e2"
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      
      navigate('/private');
      
      console.log('Connecté en tant que:', userCredential.user.email);
    } catch (error) {
     
      console.error('Erreur de connexion:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Page de Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
