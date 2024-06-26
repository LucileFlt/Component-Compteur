// Importe react depuis la bibliothèque react 
import React from 'react';
// Importe le composant ' Compteur' depuis le fichier Compteur.jsx,
// la source vient de src, ne pas oublier de suivre le chemin jusqu'au dossier .jsx du composant 
import Compteur from './components/Compteur/Compteur';
// Importe les styles globaux depuis le fichier style.module.css
import './style.module.css';

// On défini le composant fonctionnel principal 'App'
function App() {
  // On retourne le jsx pour le rendu final 
  return (
    <div className="App">
      <Compteur />
    </div>
  );
}


// On exporte le composant 'App' pour qu'il puisse etre utiliser par react
export default App;
