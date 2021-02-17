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
     const { currentUser } = useAuth();
    //  console.log(currentUser);
     return (
          <Router>
               <MyNavbar />
               {currentUser && (
                    <Switch>
                         <Route exact path={["/", "/home"]}>
                              <Home />
                         </Route>

                         <Route exact path="/party">
                              <Party />
                         </Route>
                         <Route exact path="/partycreate">
                              <PartyCreate />
                         </Route>
                    </Switch>
               )}
               {!currentUser && (
                    <Switch>
                         <Route exact path={["/login", "/"]}>
                              <Login />
                         </Route>
                         <Route exact path="/create-account">
                              <CreateAccount />
                         </Route>

                         <Route path="/forgot-password">
                              <ForgotPassword />
                         </Route>
                         <Route>
                              <NoMatch />
                         </Route>
                    </Switch>
               )}
          </Router>
     );
}

export default App;
