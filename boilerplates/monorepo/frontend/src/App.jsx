import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountCreated from "./pages/AccountCreated";
import CovidSymptomChecker from "./pages/CovidSymptomChecker";

import { AuthContext } from "./context/auth";

function App() {
  const existingToken = localStorage.getItem("token");
  const [authTokens, setAuthTokens] = useState(existingToken || "");
  const [currentUser, setCurrentUser] = useState();

  const setTokens = (data) => {
    localStorage.setItem("token", data);
    setAuthTokens(data);
  };

  const handleLogOff = (event) => {
    event.preventDefault();
    setCurrentUser("");
  };

  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser} handleLogOff={handleLogOff} />
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/success" component={AccountCreated} />
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/covid-symptom-checker"
              component={CovidSymptomChecker}
            />
            <PrivateRoute path="/admin" component={Admin} />
          </div>
        </AuthContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
