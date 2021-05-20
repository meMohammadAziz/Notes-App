import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const theme = createMuiTheme({
    // palette: {
    //   primary: {
    //     main: "#000",
    //   },
    // },
  });

  const [authenticator, setAuthenticator] = useState(false);
  const [users, setUsers] = useState([
    {
      name: "mohammad",
      password: "1234",
    },
    {
      name : 'abdullah',
      password : '4321'
    }
  ]);

  return (
    <>
      {!authenticator && (
        <Login users={users} setAuthenticator={setAuthenticator} />
      )}
      {authenticator && (
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Notes />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
