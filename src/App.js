import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import {combineReducers, createStore} from "redux";
import profile from './reducers/profile';
import scrapPost from './reducers/scrapPosts';
import comments from './reducers/comment';
import {Provider} from "react-redux";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import EditProfile from "./components/ProfileScreen/EditProfile";
import Navbar from "./components/Navbar/Navbar";
import SettingsScreen  from "./components/Settings/SettingsScreen"
import counter from './reducers/countDown';
import who from './reducers/whoReducer';
import CalendarScreen from "./components/CalendarComponent/CalendarScreen";
import calendar from "./reducers/calendar";
import events from "./reducers/event";
import Login from "./components/SignInComponent/Login";
import Privacy from "./components/Privacy/Privacy"
import Travelers from "./components/TravelersComponent/Travelers";
import SearchWeather from "./components/SearchComponent/SearchWeather";
import {Details} from "@material-ui/icons";


const reducer = combineReducers({profile: profile, counter: counter, who: who, scrapPost:scrapPost, calendar: calendar, events: events,
                                            comments:comments});
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
                            {/*<Route path={["/", "/auth"]} exact={true}>*/}
                            {/*    <Auth/>*/}
                            {/*</Route>*/}
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
                            <Route path={["/", "/login"]} exact={true}>
                                <Login/>
                            </Route>
                            <Route path={["/privacy"]} exact={true}>
                                <Privacy/>
                            </Route>
                            <Route path={["/travelers"]} exact={true}>
                                <Travelers/>
                            </Route>
                            <Route path={["/search", "/search/:criteria"]} exact={true}>
                                <SearchWeather/>
                            </Route>
                            <Route path={["/details", "/details/:criteria"]} exact={true}>
                                <Details/>
                            </Route>


                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>

        </>

    );

}

export default App;
