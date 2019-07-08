import React from "react";

// import "./Home.scss";

import Card from "../components/Card/Card";
import Graphic from "../components/Graphic/Graphic";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      {/* <header>
        <p style={{ margin: "0", padding: "0" }}>&nbsp;</p>
      </header> */}
      <Card />
      <Graphic />
      <Footer />
    </div>
  );
}

export default Home;
