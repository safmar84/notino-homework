// Comments:
// - Whole project create with CRA, refactored, organizated, added README
// - Added Context API for save and provide fetched TODOs
// - For mock real REST API added json-server into project with data example (extended with description parameter)
// - Added script for concurrent start of dev server and mock server
// - Service for fetch data separate into services/todosApi.tsx
// - Added specification for Todo type into types/types.ts file
// - Added side effect for fetch data from API with cancelable promise control for case of unmount component
// - Added routing for todo detail page

import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getTodos } from './services/todosApi'
import TodosList from './components/TodosList'
import TodoDetail from './components/TodoDetail'
import { Todo } from './types/types'


export const TodosContext = createContext<Todo[] | null>(null)

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([])
  const isCanceled = useRef(false)
  
  const callbackWithUnmountCheck = useCallback(
    (todos: Array<Todo>) => {
        if (isCanceled.current === false) {
          setTodos(todos)
        }
    }, [isCanceled]
)

  useEffect(() => {
      getTodos(callbackWithUnmountCheck)
      return () => {
          isCanceled.current = true
      }
  }, [callbackWithUnmountCheck])

  return (
    <TodosContext.Provider value={todos}>
      <Routes>
        <Route path="/" element={<TodosList />} />
        <Route path="detail" element={<TodoDetail />}>
          <Route path=":id" element={<TodosList />} />
        </Route>
      </Routes>
    </TodosContext.Provider>
  )
}

export default App

// Original content App.tsx from task assignment
/* import React from "react";

import Todo from './Todo';

// rework this into regular api call, feel free to use any open api
var todos = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        title: "Go shopping",
      },
      {
        id: "2",
        title: "Job interview",
      },
      {
        id: "3",
        title: "Prepare homework",
      },
    ]);
  }, 100);
});

function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  React.useEffect(() => {
    (async () => {
      var awaitedTodos = await todos();
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })()
  })

  return (
    <div>
      {state.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App; */