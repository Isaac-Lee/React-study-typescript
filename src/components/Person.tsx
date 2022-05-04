import { PersonProps } from "../Interface/Person.interface"

export const Person = (props :PersonProps) => {
  return <div>{props.name.first} {props.name.last}</div>
}