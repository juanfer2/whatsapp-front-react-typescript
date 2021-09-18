import React from 'react'
import Icon from '../icon'

function MessageTab() {
  return (
    <div className="message-tab">
      <div>
        <Icon name="camera" circle />
      </div>

      <div className="input-message">text</div>
      
      <div>
        <Icon name="microphone" circle type='s'/>
      </div>
      
      <div>
        <Icon name="dots-horizontal-rounded" circle />
      </div>
    </div>
  )
}

export default MessageTab
