 
 import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';



 function App() {
  return (
<>
 {/* <Navbar title="textutils2" aboutText="About textutils2"/>  */}
 {/*<Navbar/>    if the props  is not set then above Navbar convert into comments an server will choose defalut props which given in the navbar.js  */}
 <Navbar title="TextUtils" />
 <div className="container my-3 ">  {/*This is for keeping margin */}
{/*  <TextForm  heading="Enter text to analyse below(this is props )"/>  */}
<About/>
 </div>

 </>

  );
} 

export default App;
 
