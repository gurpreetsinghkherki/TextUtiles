import React, {useState} from 'react'


 function TextForm(props){

    // for lower case
    const handleUpclick2 = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    // for lower case
    const handleUpclick1 = ()=>{
       // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
  // clear the text
        const handleClearclick = ()=>{
            console.log("Reset was clicked"  + text);
            let newText = "";
            setText(newText)

        }


    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
       
    // Copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has Copied!", "success");
    }

    // Remove Extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed!", "success");
    }

    const [text,setText] = useState("")
    //text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

     return (
         <>
             <div className='container' style={{color:props.mode==='dark' ? 'white': '#042743'}}>
                 <h1>{props.heading}</h1>
                 <div className="mb-3" >
                     <label htmlFor="myBox" className="form-label">Example textarea</label>
                     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743':'white', color:props.mode==='dark' ? 'white': '#042743'}} id="myBox" rows="8"></textarea>
                 </div>
                 <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpclick2}>Convert to Uppercase</button>
                 <button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleUpclick1}>Convert to Lowercase</button>
                 <button disabled={text.length===0} className='btn btn-danger  mx-2 my-2' onClick={handleClearclick}>Reset</button>
                 <button disabled={text.length===0} className='btn btn-primary  mx-2 my-2' onClick={handleCopy}>Copy Text</button>
                 <button  disabled={text.length===0}className='btn btn-success  mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra spaces</button>

             </div>
             <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
                 <h2>Your text summary</h2>
                 <p>
                     <button className='btn btn-success me-2'>{text.split(" ").filter((element)=>{return element.length!=0}).length}</button>
                     <button className='btn btn-danger me-2'>{text.length}</button>
                     words and  characters</p>
                 <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                 <h2>Preview</h2>
                 <p>{text.length>0?text:"Nothing to preview!"}</p>
             </div>
         </>
     )
 }

export default TextForm;

