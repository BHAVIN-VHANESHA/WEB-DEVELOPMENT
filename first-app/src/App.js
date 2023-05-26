// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar title="props" about="prop-about" home="prop-home"/> 
      {/* props are used to reuse the same code */}
      {/* <Navbar/> //defaultPropTypes */}
      
      {/* <div className="container my-4">
      <Form heading="Text Manipulation" />
      </div> */}

      <div className="container my-3">
        <About/>
      </div>
        
    </>
  );
}

export default App;
