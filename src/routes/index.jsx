import { Route, Switch } from "react-router-dom"
import ListPage from "../pages/List"
import HomePage from "../pages/Home"

export const Routes = () => {

    return (
        <Switch>
            <Route path="/home">
                <HomePage/>
            </Route>
            <Route exact path="/">
                <ListPage/>
            </Route>
        </Switch>
    )

}