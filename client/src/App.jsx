import React,{  } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  

  return (
    <main className="main">
      <TodoInput />
      <TodoList />
    </main>
  );
}

export default App;
