import './App.css'
import { Button } from './components/ui/Button'

function HomePage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-emerald-700">
      Hello World
      <Button variant={'ghost'} onClick={() => console.log('reached')}>
        Click me
      </Button>
    </div>
  )
}

export default HomePage
