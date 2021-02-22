import React, { useState, useEffect } from 'react'
import './styles/main.css'
import Navbar from './Navbar'
import Login from './components/Login'
import FrontPage from './Pages/FrontPage'
import PropertyPage from './Pages/PopertyPage'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import postStore from "../src/stores/postStore";
import { getProperties } from "../src/actions/postActions";


function App() {
  const [properties, setProperties] = useState(postStore.getProperties());

  useEffect(() => {
        
     

    postStore.addChangeListener(onChange);

    if (postStore.getProperties().length === 0) getProperties();
    return () => postStore.removeChangeListener(onChange);

   

}, []);

function onChange() {
  setProperties(postStore.getProperties());

}

const frontPage=()=>{

  
  return(
<>
    <FrontPage data={properties}/>
    </>
  )
 
  
}


  return (
    
    <Router>
    <Navbar />
      <div className="max-w-screen-xl m-auto mt-24 ">
       

        <Switch>
          <Route path="/realestate" exact component={frontPage}  />
          <Route path="/property/:id" component={PropertyPage } />
          <Route path="/login" component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
