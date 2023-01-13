import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import FormikPage from '../form/page/FormikPage';
import FormikYupPage from '../form/page/FormikYupPage';
import RegisterPage from '../form/page/RegisterPage';

import '../form/styles/styles.css'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formitPage" activeClassName="nav-active" exact>Formik-Form</NavLink>
            </li>
            <li>
              <NavLink to="/formitYupPage" activeClassName="nav-active" exact>Formik-Yup-Page</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formitPage">
            <FormikPage/>
          </Route>
          <Route path="/formitYupPage">
            <FormikYupPage />
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}