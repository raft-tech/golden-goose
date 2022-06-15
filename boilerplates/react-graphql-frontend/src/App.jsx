import React, { useState } from 'react';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import './styles/bulma.css';
import './styles/App.scss';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);

  const logout = () => {
    setLoggedIn(false);
    setAccount(null);
  };

  // TODO: Integrate Bulma framework; improve responsiveness
  // TODO: Assess and improve accessibility (color contrast, keyboard navigation)
  // TODO: Integrate React Router to support multiple pages as opposed to rendering by flag
  // TODO:
  //   Persist login status to localStorage so that user doesn't have to reauthenticate on reload
  return (
    <div id="App">
      <Login onLogin={setLoggedIn} setAccount={setAccount} account={account} />
      {isLoggedIn && <UserDetails account={account} logout={logout} />}
    </div>
  );
}

export default App;
