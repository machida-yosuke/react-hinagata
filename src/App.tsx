import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "@/component/Home";
import About from "@/component/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default App;
