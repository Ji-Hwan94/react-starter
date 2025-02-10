import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import todoData from "../../common/todoData";


export const TodoMain = () => {
    const [tasks, setTasks] = useState(todoData);

    const handleAddTask = (text) => {
        setTasks([...tasks, {
            id: todoData.length++,
            text: text,
            done: false
        }]);
    }

    const handleChangeTask = (task) => {
        setTasks(tasks.map(t => {
            if (t.id === task.id) {
                return task;
            } else {
                return t;
            }
        }));
    }

    const handleDeleteTask = (taskId) => {
        setTasks(
            tasks.filter(t => t.id !== taskId)
        );
    }

    return (
        <>
            <h1>todo project</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}