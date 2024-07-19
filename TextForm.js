import React,{useState} from 'react'



export default function TextForm(props) {
const handleUpClick =()=>{
    console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
}
const handleloClick =()=>{
  console.log("UpperCase was clicked"+text);
  let newText = text.toLowerCase();
  setText(newText)
}
const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
}

    const[text, setText] =useState('Enter text here');
    //text = "new text" // wrong way to change the state
   // setText=("new text"); //correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}> Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleloClick}> Convert to lowerCase</button>

</div>
<div className="container">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length}Words {text.length}</p>
  <p>{0.008 * text.split(" ").length } Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
