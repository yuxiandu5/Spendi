import type { FC } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Car: FC = () => (
  <div className="relative w-40" aria-label="Car Animation">
    <DotLottieReact
      src="https://lottie.host/2f6154a2-4d5f-422c-bb1b-6d8aa958b934/4ov2d6xa1c.lottie"
      loop
      autoplay
    />
  </div>
)

export default Car
