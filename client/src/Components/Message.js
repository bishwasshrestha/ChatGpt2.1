
const Message = ({message}) => {

  return(
    
      <div className={`chat-message ${message.user ==='bot' && 'chatgpt'}`}>
        <div className="chat-message-center">
          <div className={`avatar ${message.user==='bot'  && 'chatgpt'}`}></div>
          <div className="message">  
          <p>{message.message}</p>
          </div>
        </div>
      </div>
      
  )
}

export default Message