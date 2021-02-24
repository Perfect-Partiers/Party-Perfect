import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Party from "./pages/Party";
import NoMatch from "./pages/NoMatch";
import MyNavbar from "./components/MyNavbar";
import PartyCreate from "./pages/PartyCreate";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

import { useAuth } from "./components/contexts/AuthContext";

import ForgotPassword from "../src/pages/ForgotPassword";

function App() {
<<<<<<< HEAD
     const { currentUser } = useAuth();
     console.log(currentUser);
     return (
          <Router>
               <MyNavbar />
               {currentUser && (
                    <Switch>
                         <Route exact path={["/", "/home"]} component={Home} />
                         <Route exact path="/party/:id" component={Party} />
                         <Route
                              exact
                              path="/partycreate"
                              component={PartyCreate}
                         />
                    </Switch>
               )}
               {!currentUser && (
                    <Switch>
                         <Route
                              exact
                              path={["/login", "/"]}
                              component={Login}
                         />
                         <Route
                              exact
                              path="/create-account"
                              component={CreateAccount}
                         />
                         <Route
                              path="/forgot-password"
                              component={ForgotPassword}
                         />
                         <Route>
                              <NoMatch />
                         </Route>
                    </Switch>
               )}
          </Router>
     );
=======
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Router>
      <MyNavbar />
      {currentUser && (
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/party/:id" component={Party} />
          <Route exact path="/partycreate" component={PartyCreate} />
        </Switch>
      )}
      {!currentUser && (
        <Switch>
          <Route exact path={["/login", "/"]} component={Login} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      )}
    </Router>
  );
>>>>>>> b3d9a207191097d89fdc5282c580a98d2db0d41f
}

export default App;
