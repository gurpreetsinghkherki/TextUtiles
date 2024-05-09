import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not


  const [alert, setAlert] = useState(null);// for alter

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (


    <>

      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>

          <Routes>
            <Route exat path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>

        </div>
      </Router>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div> */}

    </>
  );
}

export default App;
