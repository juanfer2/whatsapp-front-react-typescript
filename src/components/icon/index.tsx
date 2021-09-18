import React from 'react'

type IconType = {
  name: string
  type?: string
  active?: boolean
  circle?: boolean
}

function Icon({ name, type = '', active, circle }: IconType) {
  const isActive = active ? 'icon--active' : ''
  const classIcon = circle ? 'icon-circle' : 'icon'

  return <i className={`${classIcon} ${isActive} bx bx${type}-${name}`}></i>
}

export default Icon
