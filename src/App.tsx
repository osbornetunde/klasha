import React from 'react'
import {Switch} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./features/dashboard";

function App() {


  return (
      <Switch>
        <PrivateRoute path="/klasha" component={Dashboard} />
      </Switch>
  )
}

export default App
