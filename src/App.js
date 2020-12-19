
import './styles/main.css'
import Navbar from './Navbar'
import Login from './components/Login'
import FrontPage from './Pages/FrontPage'
import PropertyPage from './Pages/PopertyPage'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="max-w-screen-md m-auto ">
        <Navbar />

        <Switch>
          <Route path="/" component={FrontPage} exact />
          <Route path="/property/:id" component={PropertyPage} />
          <Route path="/login" component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
