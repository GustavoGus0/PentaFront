import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Main from "./components/Main";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div style={centerContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  )
}

const centerContainer = {
  width: "70%",
  margin: "0 auto",
  maxWidth: "1920px",
}

export default App
