import React from "react"

interface OscarProps {
  children :React.ReactElement
}

export const Oscar = (props :OscarProps) => {
  return <h2>{props.children}</h2>
}

