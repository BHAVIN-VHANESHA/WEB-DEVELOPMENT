import React, { useState } from 'react'

export default function Form(props) {
  const [text, setText] = useState('');
  
  const handelonclick = ()=> {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handelonchange = (event)=> {
    setText(event.target.value)
  }
  return (
    <>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">TextBox</label>
            <textarea class="form-control" value={text} onChange={handelonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            <button className="btn btn-primary m-3" onClick={handelonclick}>upper case</button>
        </div>
        <div className="container" my-3>
          <h2>Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <h5>words can be read in minutes</h5>
          <p>{ 0.008 * text.split(" ").length} minutes</p>

        </div>
    </>
  )
}
