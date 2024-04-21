import Header from "./components/header/Header";
import Card from "./components/main/Card";

function App() {

  return (
    <>
      <div style={centerContainer}>
        <Header />

      </div>
    </>
  )
}

const centerContainer = {
  width: "70%",
  margin: "0 auto"
}

export default App
