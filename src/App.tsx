import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Isaac',
    last: 'Lee',
  }
  const personList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]
  return (
    <div className="App">
     <Greet name="Isaac" messageCount={20} isLoggedIn={false} />
     <Person name={personName} />
     <PersonList names={personList} />
    </div>
  );
}

export default App;
