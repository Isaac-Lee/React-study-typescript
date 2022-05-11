import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'primary' | 'secondary'
  children: string
} 

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return <button className={`class-with${variant}`} {...rest}>{children}</button>
}