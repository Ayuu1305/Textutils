import React,{useState,useEffect} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState("")
    const [lineCount, setLineCount] = useState(0);

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showalert("Converted to UPPERCASE", "success")
    }


    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showalert("Converted to lowercase", "success")
    }
   
    const handleClearClick=()=>{
        let newText=''
        setText(newText)
        props.showalert("Cleared", "success")
    }

    useEffect(() => {
        // Count the number of lines
        const lines = text.split(/\r\n|\r|\n/);
        setLineCount(lines.length-1);
      }, [text]);
  

    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
  return (
    <> 
    <div className='container' style={{color:props.mode===`dark`?`white`:`#042743`}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#042743`}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container"  style={{color:props.mode===`dark`?`white`:`#042743`}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
        <h2>Paragraeph</h2>
        <p>{lineCount}</p>
    </div>
    </>
  )
}
