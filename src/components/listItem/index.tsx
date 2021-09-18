import React from 'react'
import Avatar from '../avatar'

interface ListItem {
  avatarImage?: string;
  title: string;
  description?: string;
  quantity?: number;
  info?: string;
}

function ListItem({avatarImage, title, description, quantity, info}: ListItem) {
  return (
    <div className="list-item">
      <div className="avatar-container">
        <Avatar urlImg={avatarImage || ''}/>
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <span className="description simple-text">{description}</span>
      </div>
      <div className="info-content">
        <span className="info simple-text">
          {info}
        </span>
        <div className="count">
          <span className="quantity">{quantity}</span>
        </div>
      </div>
    </div>
  )
}

export default ListItem
