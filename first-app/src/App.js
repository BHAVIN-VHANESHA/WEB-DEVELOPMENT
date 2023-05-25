// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Navbar title="props" about="prop-about" home="prop-home"/> 
      {/* props are used to reuse the same code */}
      {/* <Navbar/> //defaultPropTypes */}
      <div className="container">
        <h1>Form</h1>
      <Form />
      </div>
    </>
  );
}

export default App;
