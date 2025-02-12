import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil/accueil.js'; // Importation du composant Accueil
import Contact from './Components/contact/contact.js'; // Importation du composant Page
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'
import AssoOne from './Components/AssoOne/AssoOne.js'
import Assoma from './Components/Assoma/assoma.js'
import MentionsLegales from './Components/LegalMention/mention.js';
import CGU from './Components/CGU/cgu.js'
import Presentation from './Components/Qui-Sommes-Nous/presentation.js'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Utilisez <Accueil /> pour le rendre */}
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AssoOne" element={<AssoOne />} />
        <Route path="/Assoma" element={<Assoma />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/Presentation" element={<Presentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
