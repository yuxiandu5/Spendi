import type { FC } from 'react'
import Button from '../../components/ui/Button'

const HomePage: FC = () => (
  <div className="flex h-screen w-screen items-center justify-center text-emerald-700">
    Hello World
    <Button variant="ghost">Click me</Button>
  </div>
)

export default HomePage
