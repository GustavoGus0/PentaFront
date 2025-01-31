import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="center-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
