import { Routes, Route } from 'react-router-dom'
import TodosList from './components/TodosList'
import TodoDetail from './components/TodoDetail'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TodosList />} />
      <Route path="detail" element={<TodoDetail />}>
        <Route path=":id" element={<TodosList />} />
      </Route>
    </Routes>
  )
}

export default App
