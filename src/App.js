import Header from "./components/Header/Header";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
