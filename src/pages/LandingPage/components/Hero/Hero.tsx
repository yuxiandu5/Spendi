import type { FC } from 'react'
import Button from '@/components/ui/Button'
import Car from '../Car'

const Hero: FC = () => (
  <div className="space-y-6 text-center">
    <div className="flex justify-center">
      <h1 className="max-w-xl text-5xl leading-16 font-bold">
        Next Amazing Trip is Coming Soon
      </h1>
    </div>
    <p>
      We&apos;re waiting to record your spendi and be the first to know when we
      launch.
    </p>
    <div className="relative flex justify-center">
      <div className="absolute bottom-0 h-23 w-60 rounded-full bg-[radial-gradient(circle,#EAFCFC_0%,#EAFCFC_55%,#EAFCFC_100%)] opacity-90 blur-[30px]" />
      <Car />
    </div>
    <Button variant="secondary" className="relative bg-emerald-600 text-white">
      New Trip
    </Button>
  </div>
)

export default Hero
