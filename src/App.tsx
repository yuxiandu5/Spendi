import { type FC } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

const App: FC = () => (
  <Routes>
    <Route index element={<HomePage />} />
  </Routes>
)

export default App
