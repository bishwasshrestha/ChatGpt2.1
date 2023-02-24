import "./normal.css";
import "./App.css";
import React,{ useState, useEffect } from 'react'
import Message from './Components/Message'
import InputForm from './Components/InputForm'

function App() {
  
  const [chatLog, setchatLog] = useState([])

  useEffect(()=> {
  },[chatLog])  

  const clearChat = () =>{
    setchatLog([])
  }
 
  return (
    <div className="App">      
      <div className="sidemenu">
        <div className="side-menu-btn" onClick={clearChat}>+ New Chat</div>
      </div>
      <section className="chatbox">
          <InputForm chatLog={chatLog} setchatLog={setchatLog}/>
          {chatLog ? chatLog.map(chat => {            
             return <Message key={chat.message} message ={chat}/>
            }
          ) : <></>}
      </section>
    </div>
  );
}

export default App;
