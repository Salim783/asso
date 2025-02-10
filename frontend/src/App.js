import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil/accueil.js'; // Importation du composant Accueil
import Contact from './Components/contact/contact.js'; // Importation du composant Page
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Utilisez <Accueil /> pour le rendre */}
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
