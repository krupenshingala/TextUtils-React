import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,

 } from "react-router-dom";

function App() {

  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);
  
  const showAlert =(message , type) =>{
    setAlert({
      msg : message , 
      type : type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode hass been enabled" , "success");
      document.title = "TextUtils - Dark mode enabled";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode hass been enabled" , "success");
        document.title = "TextUtils - Light mode enabled";
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
        <Route exact path = "/about">
          <About/>
        </Route>
        <Route exact path = "/"> 
        {/* {"/"} is used for Home page  */}
        <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
        </Route>
     </Switch>  
    </div>
  </Router>
    
  
  </>
  );
}

export default App;
