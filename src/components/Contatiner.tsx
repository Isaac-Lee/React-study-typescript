import React from "react"

interface ContatinerPops {
  styles :React.CSSProperties
}

export const Container = (props :ContatinerPops)=> {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  )
}