'use client'
import React, { ReactNode } from 'react'
import { SmoothCursor } from "./ui/smooth-cursor"

const Cursor = ({children} : {children : ReactNode}) => {
  return (
    <div className="cursor-none">
          <SmoothCursor />
          {children}
    </div>
  )
}

export default Cursor