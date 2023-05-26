import React from 'react'

export default function Form(props) {
  return (
    <>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button className="btn btn-primary m-3">upper case</button>
        </div>
    </>
  )
}
