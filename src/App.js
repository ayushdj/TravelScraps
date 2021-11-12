import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  return (
        <div className="container">
            <HomeScreen/>
        </div>

  );

}
export default App;
