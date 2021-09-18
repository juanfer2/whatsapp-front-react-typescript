import React from 'react'

interface Layout {
  header: React.ReactNode
  leftContent: React.ReactNode
  main: React.ReactNode
}

function Layout({ header, leftContent, main }: Layout) {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="sidebar">{leftContent}</div>
      <div className="main">{main}</div>
    </div>
  )
}

export default Layout
