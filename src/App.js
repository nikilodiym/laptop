import "./App.css";
import Catalog from "./pages/catalog";
import Header from "./components/header";
import Baner from "./components/baner";

function App() {
  return (
    <div className="App">
      <Header />
      <Baner />
      <Catalog />
    </div>
  );
}

export default App;
