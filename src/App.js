import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/demo">Demo</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => (
          <h3>This is Home page.</h3>
        )} />
        <Route path="/about" component={About} />
        <Route path="/contacts/:contactId" component={Contacts} />
        <Route render={() => (
          <h3>Page not found.</h3>
        )} />
      </Switch>
    </div>
  </Router>
);

const About = () => <h3> This is About page</h3>;
const Contacts = ({ match }) => {
  return <h3> contact: {match.params.contactId || 'dummy contact'} </h3>
};
export default App;
