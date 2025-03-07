import React from "react";
import ThemeRoutes from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <ThemeRoutes />
      </Router>
    </div>
  );
};

export default App;
