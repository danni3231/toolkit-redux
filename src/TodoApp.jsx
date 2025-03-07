import { useState } from 'react';
import { useGetTodoByIDQuery, useGetTodoQuery } from './apis';

export const TodoApp = () => {
	//const { data: { todos } = [], isLoading } = useGetTodoQuery();
    const [todoId, setCounter] = useState(1)
	const { data:  todo  = [], isLoading } =useGetTodoByIDQuery(todoId);

    const onNextTodo = () => {
        setCounter(todoId + 1);
    };
    const onPrevTodo = () => {
        if (todoId === 1) return  // prevent going back to the first todo
        setCounter(todoId - 1);
    };

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />

			<h4>Loading: {isLoading ? 'true' : 'false'}</h4>

			{/* 			<ul>
				{todos?.map((todo) => (
					<li key={todo.id}>
						<strong>{todo.completed ? 'Done' : 'Pending'}</strong>
						{' - '+todo.todo}
					</li>
				))}
			</ul> */}

            <pre>{JSON.stringify(todo)}</pre>

			<button onClick={ onPrevTodo }>PrevTodo</button>
            <button onClick={ onNextTodo }>NextTodo</button>
		</>
	);
};
