import { useState, useEffect } from "react";
import Header from "./components/Header";
import BackGround from "./components/BackGround";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <div className="font-pretendard">
      <Header />
      <BackGround />
      <Bottom />
    </div>
  );
};

export default App;
