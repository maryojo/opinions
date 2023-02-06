import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '../images/animations/loading.json'


const Loader = () => {
  return (
    <Player
    src={LoadingAnimation}
    autoplay
    loop
    className={`w-36 h-36 md:w-64 md:h-64`}>
    </Player>
  )
}

export default Loader