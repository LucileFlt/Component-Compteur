//Permet d'importer react et le hook usestate depuis la bibliothèque ' react' .
import React, { useState } from 'react';
//Permet d'importer les style depuis le fichier css module du composant choisi
import styles from './style.module.css';

//On d"finit le composant fonctionnel ' Compteur '
function Compteur() {
  // On déclare une variable d'état 'count' initialisée à 0 et une fonction 'setCount' pour la mettre à jour.
  const [count, setCount] = useState(0);

   // On déclare une variable d'état 'showRainbow' initialisée à false et une fonction 'setShowRainbow' pour la mettre à jour.
   const [showRainbow, setShowRainbow] = useState(false);
  
  // Fonction pour incrémenter le compteur de 1
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Vérifie si le nouveau compteur est un multiple de 10
    if (newCount % 10 === 0) {
      setShowRainbow(true);
      // Cache l'arc-en-ciel après 3 secondes
      setTimeout(() => setShowRainbow(false), 2000);
    }
  };

  // Fonction pour décrémenter le compteur de 1, sans aller en dessous de zéro
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  // Fonction pour réinitialiser le compteur à zéro
  const reset = () => {
    setCount(0);
    setShowRainbow(false);
  };


  // Le JSX retourné pour rendre l'interface utilisateurs
  return (
    
    <div className={`${styles.container} ${showRainbow ? styles.rainbowBackground : ''}`}>
      <h1 className={styles.title}>Compteur de la GayPride</h1>
      <p className={styles.counter}>Nombre de participants : {count}</p>
      <button className={styles.button} onClick={increment}>Incrémenter</button>
      <button className={styles.button} onClick={decrement}>Décrémenter</button>
      <button className={styles.button} onClick={reset}>Réinitialiser</button>
    </div>

    // Compteur de Participants = nom de l'application
    // Nombre de participants = Affichage du nombre de participants
    // bouton increment = Bouton pour incrémenter le compteur
    // bouton decrement = Bouton pour drécrémenter le compteur
    // bouton réinitialiser = bouton pour réinitialiser le compteur
  );
}


// On exporte le composant " Compteur " pour qu'il puisse etre utiliser dans d'autres fichiers
export default Compteur;
