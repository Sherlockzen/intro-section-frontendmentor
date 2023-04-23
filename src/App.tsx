import { useState } from 'react'
import menuOpen from '../src/images/icon-menu.svg'
import menuClose from '../src/images/icon-close-menu.svg'

function App() {

  return (
  <>
    <div className=' font-Epilogue w-screen h-screen'>
      <header className=' p-4 flex justify-between items-center'>
        <span className=' font-bold text-4xl'>snap</span>
        <div className='menu-button'>
          <img src={menuOpen} alt='open menu icon' />
          <img src={menuClose} alt='close menu icon' className=' hidden' />
        </div>
      </header>
    </div>
  </>
  )
}

export default App
