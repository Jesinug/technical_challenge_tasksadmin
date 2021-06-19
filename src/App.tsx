import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface MyTask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<MyTask[]>([])

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask('');
  }

  const addTask = (name: string) => {
    const newTasks: MyTask[] = [...tasks, { name, done: false }]
    setTasks(newTasks)
  }

  const toggleDoneTask = (i: number) => {
    const newTasks: MyTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done; 
    setTasks(newTasks);
  }

  const removeTask = (i: number): void => {
    const newTasks: MyTask[] = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text"
              onChange={event => setNewTask(event.target.value)}
              value={newTask}
              className="form-control"
              autoFocus
              />
            <button className="btn btn-outline-success btn-block mt-3">Create task</button>
          </form>
        </div>
      </div>

      {tasks.map((task: MyTask, i: number) => (
          <div className="card card-body mt-2" key={i}>
            <h2 style={{textDecoration: task.done ? 'line-through' : ''}}>{task.name}</h2>
            <div>
            <button className="btn btn-outline-primary" onClick={() => toggleDoneTask(i)}>
              {task.done ? '✔' : '➔'}
            </button>
            <button 
            className="btn btn-outline-danger m-3" 
            onClick={() => removeTask(i)}
            >
            🗑️
            </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
