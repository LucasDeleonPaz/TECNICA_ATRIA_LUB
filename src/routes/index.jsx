import { Route, Switch } from "react-router-dom"
import ListPage from "../pages/List"
import HomePage from "../pages/Home"

export const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/ListPage">
                <ListPage/>
            </Route>
        </Switch>
    )

}