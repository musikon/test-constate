import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useAdminContext } from '../../state'
import { Auth, Chat } from '../../page'

const Provider = useAdminContext.Provider;

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = localStorage.getItem('token');
    return (
      <Route
        {...rest}
        render={props =>
            loggedIn ? (<Component {...rest} />
            ) : (
              <Redirect
                to={{
                  pathname: "/auth",
                  state: props.location,
                }}
              />
            )
        }
      />
    )
};

export function ViewContainer() {

    return (
        <Router>
            <Provider>
                <Switch>
                    <PrivateRoute exact path="/" component={Chat} />
                    <Route path="/auth">
                        <Auth />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    );
}

