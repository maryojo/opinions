import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '../images/animations/loading.json'


const Loader = ({visibility}) => {
  return (
    <Player
    src={LoadingAnimation}
    autoplay
    loop
    className={`w-64 h-64 ${visibility}`}>
    </Player>
  )
}

export default Loader