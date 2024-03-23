import React, {useState}  from 'react'

 
 
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here2');
// text = "new text"; // this is wrong way to change the state 
// setText("new text"); // correct way to change the state 
 const handleUpClick = ()=>{
  console.log("Uppercase was clicked " + text )
  let newText = text.toUpperCase();
  setText(newText)
 }
 const handleOnChange = (event)=>{
  console.log(" on change ")
setText(event.target.value);
 }
 //This is for lowercase 
 const handleLRClick = ()=>{
  console.log("Lowercase was clicked " + text )
  let newText = text.toLowerCase();
  setText(newText)
 }
 //This is for Firstuppercase in sentence  
 const handleFUClick = () => {
  console.log("Lowercase was clicked " + text);
  let newText = text.toLowerCase().replace(/(^|\.\s+)([a-z])/g, function(match, p1, p2) {
    return p1 + p2.toUpperCase();
  });
  setText(newText);
};
 


  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
   <div className="mb-3"> 
    <textarea className="form-control" value={text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>  
 
 <button className="btn btn-primary mx-3" onClick={handleLRClick}>Convert To Lowercase </button>
 
 <button className="btn btn-primary mx-3" onClick={handleFUClick}>Convert To FirstUppercase </button>
 <div className="mb-3" /> 
 
 

    </div>
    <div className="container" my-3>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
 
