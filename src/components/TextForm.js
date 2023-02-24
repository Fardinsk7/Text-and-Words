import React,{useState} from 'react';
import './TextForm.css';



export default function TextForm(props) {
    const [text,setText] = useState("")
    const[word,setNumword] = useState(0)
    const onchageTextarea =(event) =>{
        setText(event.target.value)
        wordCount()
        //this event.target.value help to change the text inside the textarea
    }
    
    const wordCount =()=>{
      let a=0;
      let b = text.split(/\s+/)
      // console.log(b)
      b.forEach(myfunction)
      function myfunction(v){
        if(v !== "" & v!=="'"&v!=="!"&v!=="@"&v!=="#"&v!=="$"&v!=="%"&v!=="^"&v!=="&"&v!=="*"&v!=="("&v!==")" &v!=="''"&v!=='""'){
          a+=1
      }
      }
      
      setNumword(a)
      
    }

    const onclickBtn1 = (e)=>{
        let newtext = text.toUpperCase()
        setText(newtext)  
        if(text.length > 0){
          props.showAlert("Convert to Uppercase","success")

        }
        wordCount()
      };
      
      const onclickBtn2 = ()=>{
        let lowercase = text.toLowerCase();
        setText(lowercase)
        if(text.length > 0){
          props.showAlert("Convert to Lowercase","success")

        }
        wordCount()
      };
      
      const email = (text)=>{
      let e = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.com)/gi)
      if(e){
        return e.join(" ")
      }
      else{
        let d = ""
        return d;
      }  
    };
    
    const clear = ()=>{
      let newtext = "";
      setText(newtext)
      props.showAlert("Textbox Cleared","success")
      wordCount()
    };
    
    const removeSpaces =()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
      
      if(text.length > 0){
        props.showAlert("Extra Spaces Removed","success")

      }
      wordCount()
    };

   
    // text.split(" ").length

  return (
    <>


    <div className="container my-3 text-center" style={{color:props.mode === "dark"?"black":"white"}}>
        <h1> {props.heading}</h1>
        <div className="input-group">
        <textarea className="form-control w-10 textbox my-3" aria-label="With textarea" rows="7" value ={text}  onChange={onchageTextarea} style={{color:props.mode === "dark"?"black":"white",backgroundColor:props.mode === "dark"?"white":"#282727"}} ></textarea>{/* since we have assign value = text that is a state variable here so without onChange event we will not able to change the text inside the textarea */}
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={onclickBtn1} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={onclickBtn2} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={clear} >Clear</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={removeSpaces} >Remove Extra Spaces</button>
    </div>

    <div className="container" style={{color:props.mode === "dark"?"black":"white"}}>
      <p>Number of words: <b>{text.length <=0?0:word}</b>  Number of character: <b>{text.length}</b></p>
      <p><b>{text.length<=0?"0.00":((0.008 * text.split(" ").length).toFixed(2))}</b> Minutes read</p>
      <h2>Preview of given text:</h2>
      <p style={{color:props.mode === "dark"?"grey":"white",height:"50px"}}>{text.length>0?text:"Nothing to Preview!"}</p>
    </div><br />

    <div className="container" style={{color:props.mode === "dark"?"black":"white"}}>
      <h2>Emails Extracted: </h2>
      <p>{email(text)}</p>
    </div>


    </>
  )
}
