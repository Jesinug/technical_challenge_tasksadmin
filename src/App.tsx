import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { Card } from "./components/Cards/Card";
import { Task } from "./components/Models/Tasks";
import { getTasks } from "./services/tasks";
import { CreateModal } from "./components/CreateModal/CreateModal";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };



  const populateTaskList = (task: [Task]) => {
    setTasks(task);
  };
  useEffect(() => {
    requestTasks();
  }, []);

  const requestTasks = () => {
    getTasks()
      .then((res) => {
        populateTaskList(res.data);
      })
      .catch((e) => console.log("error", e));
  };


  const renderTaskCards = () => {
    return tasks.map((task: Task, i: number) => (
      <Card
      task={{ name: task.name, id: task.id, priority: task.priority }}
      index={i}
      tasks={tasks}
    />
    ));
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        tasks,
        setTasks,
        requestTasks,
      }}
    >
      <>
        <div className="container p-4">
          <Button
            color="primary"
            onClick={() => setOpenModal(true)}
            startIcon={<AddIcon />}
          >
            New Task
          </Button>
          <SearchBar />
          {renderTaskCards()}
        </div>
        
        <CreateModal open={openModal} handleClose={handleCloseModal} />
      </>
    </AppContext.Provider>
  );
}

export default App;
