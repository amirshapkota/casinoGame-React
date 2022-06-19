import React from 'react'
import "./chat.scss"

export const Chat = (props) => {
  return (props.trigger) ? (
    <div className='chat'>
        <div className="chat-inner">
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            <h3>Pop Up</h3>
        </div>
    </div>
  ) : "";
}
