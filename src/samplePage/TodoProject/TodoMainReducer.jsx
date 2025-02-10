import { useReducer, useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import todoData from "../../common/todoData";
import { todoReducer } from "./TodoMainReducer.reducer";



// 현재 상태와 액션 객체(어떤 일을 할 것인지)를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
// reducer를 사용하는 이유. 
// 비즈니스 로직이 복잡한 경우, 이를 분리하여 사용할 수 있다.(컴포넌트 외부에 사용하여, 코드라인을 줄일 수 있음)
// 가독성이 좋음. swtich 문을 활용
// 사실 개인적 취향일 수도 있음
export const TodoMainReducer = () => {
    // const [tasks, setTasks] = useState(todoData);
    const [tasks, dispatch] = useReducer(todoReducer, todoData);
    const handleAddTask = (text) => {
        dispatch({
            type:'add',
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            text: text
        });
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'change',
            task: task,
        });
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId,
        });
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