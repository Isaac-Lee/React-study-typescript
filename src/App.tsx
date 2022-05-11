import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List 
      items={['I am', 'Isaac', 'Lee']} 
      onClick={(item) => console.log(item)} 
      />
      <List 
      items={[1, 2, 3]} 
      onClick={(item) => console.log(item)} 
      /> */}
      <List 
      items={[
        {
          id: 1,
          first: 'Isaac',
          lee: 'Lee',
        },
        {
          id: 2,
          first: 'Clark',
          lee: 'Kent',
        },
      ]} 
      onClick={(item) => console.log(item)} 
      />
    </div>
  );
}

export default App;
