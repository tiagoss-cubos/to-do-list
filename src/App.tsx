import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };

  return (
    <div className="App">
      <Modal
        title="Editar Tarefa"
        children={
          <TaskForm
            btnText="Editar"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        }
      ></Modal>

      <Header />
      <main className={styles.main}>
        <h2>conteúdo...</h2>
        <TaskForm
          btnText="Editar"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
