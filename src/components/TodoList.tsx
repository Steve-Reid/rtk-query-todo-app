import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useGetTodosQuery } from '@features/api/apiSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // addTodo
    setNewTodo('');
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button type="submit" className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringify(todos);
  } else if (isError) {
    if ('status' in error) {
      // FetchBaseQueryError type
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);

      content = (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      // SerializedError type
      content = <div>{error.message}</div>;
    }
  }

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
