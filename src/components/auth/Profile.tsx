export interface ProfileProps {
  name :string
}

export const Profile = ({name} :ProfileProps) => {
  return <div>Private Prifile component Name is {name}</div>
}