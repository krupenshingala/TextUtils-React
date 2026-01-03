import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to uppercase" , "success") ;
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to lowercase" , "success") ;
    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared" , "success") ;
    }

    const handleCopy =() =>{
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard" , "success") ;
    }

    
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }


    const [text , setText] = useState('');
    
  return (
    <>
    <div className='container'style={{color :props.mode === 'dark' ? 'white' :'black'}}>
        <h1 className='mb-4'>{props.heading}  </h1>
       <div className ="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} style = {{backgroundColor :props.mode === 'dark' ? '#6c757d' :'white' ,color :props.mode === 'dark' ? 'white' :'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
       <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
    </div>

    <div className='conatiner my-4' style={{color :props.mode === 'dark' ? 'white' :'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}words and {text.length}characters</p>
      <p>{text.trim() === "" ? 0 : 0.008 * text.trim().split(/\s+/).length } Minutes Read </p>
      <h3>Preview</h3>
      <p>{text.length>0 ?text : "Nothing to Preview !"}</p>
    </div>
    </>
  )
}
