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
    },2500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a3249';
      showAlert("Dark mode hass been enabled" , "success");
      // document.title = "TextUtils - Dark mode enabled";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode hass been enabled" , "success");
        // document.title = "TextUtils - Light mode enabled";
    }
  }
  return (
  
    <>
    <Router>
      <Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
    <div className="container my-3" style={{ marginTop: "70px" }}>
      <Switch>
        <Route exact path = "/about">
          <About mode={mode}/>
        </Route>

        <Route exact path ="/">
        <TextForm showAlert={showAlert}heading="Try TextUtils - Word Counter | Character Counter" mode={mode}/>
        </Route>
      
       </Switch>
    </div>
    </Router>
    </>
    );
}

export default App;
