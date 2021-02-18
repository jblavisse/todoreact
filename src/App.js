import React, {useState} from 'react';
import Task from './Task';

function App() {
  const [tasks] = useState(
    [
      {id: 1, title: "Faire à manger", completed: false},
      {id: 2, title: "Faire la vaiselle", completed: true},
      {id: 3, title: "Dormir", completed:false}
    ]
  )
  return (
    <div className="App">
      <ul>
      {
        tasks.map(task => {
          return <li><Task title={task.title} /></li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
