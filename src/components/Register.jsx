import React, { useState } from 'react';
import '../styles/register.css';
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

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      await userCredential.user.updateProfile({
        displayName: name
      });
      
      await userCredential.user.sendEmailVerification();
      
      navigate('/login');
     
      console.log('Utilisateur inscrit avec succès:', userCredential.user.email);
    } catch (error) {
      
      console.error('Erreur d\'inscription:', error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Page d'Inscription</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button className='btn-register' type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
