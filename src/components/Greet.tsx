interface GreatProps {
  name :string
}

export const Greet = (props :GreatProps) => {
  return (
    <div>
      <h2>Welcome {props.name}!</h2>
    </div>
  )
}