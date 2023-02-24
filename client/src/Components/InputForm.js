import React from "react";
import { useState } from "react";


const InputForm = ({chatLog, setchatLog}) => { 

  const [inputText , setInputText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()   
    if(inputText){   
      let newChat = [...chatLog, {user:'me', message: `${inputText}`}] 
      setInputText('')              
      setchatLog(newChat)  
    
      const URL = 'http://localhost:3002/openai/callapi/' 
      const messages = newChat.map(chat => chat.message).join("\n")
    
       fetch(URL, {
        method:'POST',      
        origin:'http://localhost:3000',
        mode:'cors',
        headers: {        
          'Content-Type':'application/json'
        },
        body:JSON.stringify({ 
          message:messages 
          })
      }).then(response => response.json())
      .then(data => { 
        let newbotLog = [...newChat, {user:'bot', message:`${data.data}`}]
        setchatLog(newbotLog)      
      })      
    }else{
      alert('please enter some question on input field')
    } 
  }

  const handleChange =(e)=>{
   setInputText(e.target.value)
  }
 
  return(
    <div className="chat-input-holder">  
          <form className="input-form" onSubmit={handleSubmit}>
            <input 
              className="chat-input-textarea"  
              value={inputText}        
              onChange={handleChange}>
            </input>   
            <input type="submit"></input>
            </form>
        </div>
  )
}

export default InputForm;