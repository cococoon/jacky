import React from "react";
import "./App.scss";

import Card from "./components/Card/Card";
import Graphic from "./components/Graphic/Graphic";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <header>
        <p style={{ margin: "0", padding: "0" }}>&nbsp;</p>
      </header> */}
      <Card />
      <Graphic />
      <Footer />
    </div>
  );
}

export default App;
