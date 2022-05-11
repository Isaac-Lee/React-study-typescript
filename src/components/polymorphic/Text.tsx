import React from "react";

interface TextOwnPorps<E extends React.ElementType>  {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: React.ElementType
}


type TextPorps<E extends React.ElementType> = TextOwnPorps<E> & Omit<React.ElementType<E>, keyof TextOwnPorps<E>>

export const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextPorps<E>) => {
  const Component = as || 'div'
  return <Component className={`class-with-${size}-${color}`}>
    {children}
    </Component>
}