import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { useNavigate } from 'react-router-dom';
import '../styles/private.css';

const PrivateSpace = () => {
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error.message);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`files/${selectedFile.name}`);

    try {
      await fileRef.put(selectedFile);
      console.log('Fichier téléchargé avec succès:', selectedFile.name);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error.message);
    }
  };

  return (
    <div>
      {user && (
        <div className='private-space'>
          <h2>Espace Privé</h2>
          <p>Adresse e-mail: {user.email}</p>
          <input type="file" onChange={handleFileSelect} />
          <button onClick={handleSubmit}>Envoyer le fichier</button>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      )}
    </div>
  );
};

export default PrivateSpace;
