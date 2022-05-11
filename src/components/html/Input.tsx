import React from 'react'

interface InputProps extends React.ComponentProps<'input'> {}

export const CustomInput = (props: InputProps) => {
  return <input {...props} />
}