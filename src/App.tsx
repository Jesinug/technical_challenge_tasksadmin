import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { forEachTrailingCommentRange } from 'typescript';
import { Card } from './components/Cards/Card';
import { OperationModal } from './components/OperationModal/OperationModal'

type FormElement = React.FormEvent<HTMLFormElement>;

interface MyTask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  //const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<MyTask[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    /**addTask(newTask);
    setNewTask('');*/
  }

  const handleCloseModal = () => {
    setOpenModal(false)
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

  const populateTaskList = (task: [MyTask]) => {
    setTasks(task)

  }
  useEffect(() => {
    axios.get('http://localhost:8888/task')
  .then(res => {

    populateTaskList(res.data);

  }).catch(e => console.log('error', e));

  },[]);
  

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card">
        <div className="card-body">

        </div>
      </div>

      { openModal && <OperationModal closeFunction={handleCloseModal}/> }
      <button onClick={() => setOpenModal(true)}>
        Create Task
      </button>

      {tasks.map((task: MyTask, i: number) => <Card 
      task={{name: task.name, done: task.done}} 
      index={i} 
      toggleDoneTask={toggleDoneTask}
      removeTask={removeTask}
      />
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
