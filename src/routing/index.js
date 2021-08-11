import { Route, Switch } from "react-router-dom"
import CharacterList from "../components/CharacterList"
import UserProfile from "../components/UserProfile"

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
