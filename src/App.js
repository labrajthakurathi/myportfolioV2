import React, { useState, useEffect } from "react";
import Pages from "./components/Pages";
import Header from "./components/Header";
import Loader from "./images/loader.gif";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  return loading ? (
    <div className="loading">
      <img src={Loader} alt="" />
    </div>
  ) : (
    <div className="App">
      <Pages />
      <Header />
    </div>
  );
}

export default App;
