import './App.css';
// import Aboutus from './components/Aboutus';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React,{useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route
//   // Link
// } from "react-router-dom";
// import Switch from 'switch';

function App() {
  const [mode,setmode] = useState("dark");
  const [modebtnText,setmodebtnText] = useState("Enable Dark Mode")
  const [alert,setAlert] = useState(null)

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null) 
    },1500)
  }
  
  const toggleBtns = ()=>{
    if(mode === "dark"){
      setmode("light");
      document.body.style.backgroundColor ="grey"
       setmodebtnText("Enable Light Mode")
      showAlert("Enable Dark Mode","success")
     
      }
      else{
        setmode("dark")
      setmodebtnText("Enable Dark Mode")
      document.body.style.backgroundColor ="white"
      showAlert("Enable Light Mode","success")
     
    }
  }
  const summer =()=>{
    document.body.style.backgroundColor = "Orange";
  }
  const rainy =()=>{
    document.body.style.backgroundColor = "Blue";
  }
  const winter =()=>{
    document.body.style.backgroundColor = "#f2b13f";
  }
  return (
    <>
    {/* <BrowserRouter>
    <Navbar title ="TextUtils" aboutText='About us' mode={mode} toggleBtn ={toggleBtns} modebtnText={modebtnText} summer={summer} rainy={rainy} winter={winter} /> 
    <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze:" mode={mode} showAlert ={showAlert} />}/>
        <Route exact path="/about" element={<Aboutus mode={mode} />} />
      </Routes>
    </BrowserRouter> */}
  
        {/* <Aboutus/> */}
  {/* Props are like arguments to function  */}
  <Navbar title ="TextUtils"  mode={mode} toggleBtn ={toggleBtns} modebtnText={modebtnText} summer={summer} rainy={rainy} winter={winter} /> 
    <Alert alert={alert}/>   
    <TextForm heading="Enter the text to analyze:" mode={mode} showAlert ={showAlert} />
   </>
  );
}

export default App;
