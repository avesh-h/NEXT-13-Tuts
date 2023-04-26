import React from 'react'

// with name layout.jsx we can create saperate layout for individual page and it will show only for about route page 

const Aboutlayout = ({children}) => {
  return (
    <div>
      <h1>This is About layout</h1>
      {children}
    </div>
  )
}

export default Aboutlayout
