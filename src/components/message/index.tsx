import React from 'react'

type TypeContent = "image" | "video"

interface Message {
  isRecipient?: boolean
  content: string
  type?: TypeContent
  url?: string
}

function Message({isRecipient = true, content, type, url}: Message) {
  
  if (type === 'image') {
    return (
      <div className={isRecipient ? "message-container" : "message-container message-container--active"} >
        <div className="image-container">
          <img src={url} alt="image" className={isRecipient ? "image" : "image image--active"} />
        </div>
        <br/>
      </div>
    )
  }

  return (
    <div className={isRecipient ? "message-container" : "message-container message-container--active"} >
      <div className={isRecipient ? 
        "message" : "message message--active"}>

        <div className="text-content">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Message
