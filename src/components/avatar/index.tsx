import React from 'react'

interface Avatar {
  urlImg: string;
}

function Avatar({urlImg}: Avatar) {
  return (
    <div className="avatar-content">
      <div className="avatar-container">
        <img  className="avatar" src={urlImg} alt="" />
      </div>
    </div>
  )
}

export default Avatar
