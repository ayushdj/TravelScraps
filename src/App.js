import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {combineReducers, createStore} from "redux";
import profile from './reducers/profile'
import {Provider} from "react-redux";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import EditProfile from "./components/ProfileScreen/EditProfile";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import SettingsScreen  from "./components/Settings/SettingsScreen"
import counter from './reducers/countDown';
import who from './reducers/whoReducer';
import CalendarScreen from "./components/CalendarComponent/CalendarScreen";
import calendar from "./reducers/calendar";


const reducer = combineReducers({profile: profile, counter: counter, who: who, calendar: calendar});
const store = createStore(reducer);

function App() {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container">
                        <Navbar/>
                        <Switch>
                            <Route path={["/", "/home"]} exact={true}>
                                <HomeScreen/>
                            </Route>
                            <Route path={["/", "/auth"]} exact={true}>
                                <Auth/>
                            </Route>
                            <Route path={["/profile"]} exact={true}>
                                <ProfileScreen/>
                            </Route>
                            <Route path={["/edit-profile"]} exact={true}>
                                <EditProfile/>
                            </Route>
                            <Route path={["/settings"]} exact={true}>
                                <SettingsScreen/>
                            </Route>
                            <Route path={["/calendar"]} exact={true}>
                                <CalendarScreen/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        </>

    );

}

export default App;
