import React from 'react'
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./features/dashboard";
import Signin from "./pages/signin";

function App() {


    return (
        <Switch>
            <Route path={'/'} exact={true} component={Signin}/>
            <PrivateRoute path="/klasha" component={Dashboard}/>
        </Switch>
    );
}

export default App
