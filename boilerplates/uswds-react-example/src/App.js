import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './routes';

/* import custom-made components */
import GovBannerComponent from './components/GovBannerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/Home';
import ModalsPage from './pages/Modals';
import FormsPage from './pages/Forms';

function App() {
  const { HOME_PAGE, MODALS_PAGE, FORMS_PAGE } = Routes;

  return (
    <div className="App">
        <Router>
          <a className="usa-skipnav" href="#main-content">
            Skip to main content
          </a>
          <GovBannerComponent />
          <a className="usa-skipnav" href="#main-content">Skip to main content</a>
          <HeaderComponent />
          <main id="main-content">
              <section className="usa-section">
                <Switch>
                  <Route path={MODALS_PAGE}>
                    <ModalsPage />
                  </Route>
                  <Route path={FORMS_PAGE}>
                    <FormsPage />
                  </Route>
                  <Route path={HOME_PAGE}>
                    <HomePage />
                  </Route>
                </Switch>
              </section>
            </main>
          <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
