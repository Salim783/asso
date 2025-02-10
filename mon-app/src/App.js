import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil/accueil.js'; // Importation du composant Accueil

function App() {
  return (
    <Router>
      <Routes>
        {/* Utilisez <Accueil /> pour le rendre */}
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  );
}

export default App;
