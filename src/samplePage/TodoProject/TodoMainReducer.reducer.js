export const todoReducer = (tasks, action) => {
    switch (action.type) {
        case 'add': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'change': {
            // 중괄호 없애주셈
            return tasks.map((task) => (task.id === action.task.id ? action.task : task));
        }
        case 'delete': {
            return tasks.filter((task) => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};