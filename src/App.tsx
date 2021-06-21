import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Card } from './components/Cards/Card';
import { MyTask } from './components/Models/Tasks';
import { OperationModal } from './components/OperationModal/OperationModal';



function App(): JSX.Element {

  //const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<MyTask[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)


  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const populateTaskList = (task: [MyTask]) => {
    setTasks(task)
  }
  useEffect(() => {requestTasks()},[]);
  
  const requestTasks = () => {
    axios.get('http://localhost:3000/task')
    .then(res => {
  
      populateTaskList(res.data);
  
    }).catch(e => console.log('error', e));
  }

  return (
    <AppContext.Provider
            value={{
              openModal,
              setOpenModal,
              tasks,
              setTasks,
              requestTasks
            }}>

    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">


      { openModal && <OperationModal closeFunction={handleCloseModal}/> }
      <button className="btn btn-link" onClick={() => setOpenModal(true)}>
        Create Task
      </button>

      {tasks.map((task: MyTask, i: number) => <Card 
      task={{name: task.name, id: task.id, priority: task.priority}} 
      index={i} 
      tasks={tasks}
      />
      )}
      </div>
      </div>
    </div>

    </AppContext.Provider>
  );
}

export default App;
