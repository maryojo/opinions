import React from 'react'
import ErrorImg from '../images/error.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Error = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <img src={ErrorImg} className='w-12 md:w-24'/>
      <div className='flex flex-col gap-3 items-center'>
      <p className='text-center'>{`Uh oh! ${message}`}</p>
        <Link to='/'>
          <Button text='Go Home'/>
        </Link>
      </div>
    </div>
  )
}

export default Error