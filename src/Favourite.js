import React from 'react'
import { Footer } from './componets/Footer'
import { Navbar } from './componets/Navbar'

export const Favourite = () => {
  return (
    <>
    <Navbar/>
    <div className='favs'>
      <h1> YOU DON'T HAVE ANY FAVOURTES YET 😉...</h1>
    </div>
    <Footer/>
    </>
  )
}
