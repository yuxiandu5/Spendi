import { type FC } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'

const App: FC = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="landing" element={<LandingPage />} />
  </Routes>
)

export default App
