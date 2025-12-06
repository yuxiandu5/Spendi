import type { FC } from 'react'
import DialogDemo from './component/CreateTripDialog'

const HomePage: FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    Hello World
    <DialogDemo />
  </div>
)

export default HomePage
