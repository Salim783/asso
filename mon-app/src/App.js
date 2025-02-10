import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil/accueil.js'; // Importation du composant Accueil
import Page from './Components/Page/Page.js'; // Importation du composant Page

function App() {
  return (
    <Router>
      <Routes>
        {/* Utilisez <Accueil /> pour le rendre */}
        <Route path="/" element={<Accueil />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
