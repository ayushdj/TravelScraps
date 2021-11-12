import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {combineReducers, createStore} from "redux";
import profile from './reducers/profile'
import {Provider} from "react-redux";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
const reducer = combineReducers({profile: profile});
const store = createStore(reducer);

function App() {
  return (
      <>
          <Provider store={store}>
              <BrowserRouter>
                  <div className="container">
                      <Route path={["/", "/home"]} exact={true}>
                          <HomeScreen/>
                      </Route>
                      <Route path={["/profile"]} exact={true}>
                          <ProfileScreen/>
                      </Route>
                  </div>
              </BrowserRouter>
          </Provider>
      </>

  );

}
export default App;
