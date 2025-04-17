import React from "react";
import ThemeRoutes from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";



// The App is sent to the components/loadingPage

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
