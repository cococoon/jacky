import React from "react";

// import "./Home.scss";

import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="Home" style={{ zIndex: 20 }}>
      {/* <header>
        <p style={{ margin: "0", padding: "0" }}>&nbsp;</p>
      </header> */}
      <Card />
    </div>
  );
}

export default Home;
