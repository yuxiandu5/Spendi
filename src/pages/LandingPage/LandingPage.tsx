import type { FC } from 'react'
import Hero from './components/Hero'

const LandingPage: FC = () => (
  <div className="relative">
    <div className="flex h-screen items-center justify-center bg-linear-to-r from-[#E3E9FF] to-[#EBF1FF]">
      <div className="absolute right-60 bottom-40 h-130 w-150 rounded-full bg-[radial-gradient(circle,#EAFCFC_0%,#EAFCFC_55%,#EAFCFC_100%)] opacity-90 blur-[90px]" />
      <div className="absolute -top-5 left-80 h-112 w-120 rounded-full bg-[radial-gradient(circle,#C8C8FE_0%,#C8C8FE_55%,#C8C8FE_80%)] opacity-80 blur-[90px]" />
      <div className="relative">
        <Hero />
      </div>
    </div>
  </div>
)

export default LandingPage
