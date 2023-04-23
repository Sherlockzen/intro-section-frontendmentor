import { useState } from 'react'
import menuOpen from './images/icon-menu.svg'
import menuClose from './images/icon-close-menu.svg'
import heroMobile from './images/image-hero-mobile.png'
import audiphile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'

function App() {

  return (
  <>
    <div className=' font-Epilogue w-screen h-screen '>
      <header className=' p-4 flex justify-between items-center h-20'>
        <span className=' font-bold text-4xl'>snap</span>
        <div className='menu-button'>
          <img src={menuOpen} alt='open menu icon' />
          <img src={menuClose} alt='close menu icon' className=' hidden' />
        </div>        
      </header>
      <img src={heroMobile} alt='a man holding a laptop' />
      <div className=' text-center p-3 flex flex-col gap-6'>
        <h1 className=' text-3xl font-bold'>
          Make remote work
        </h1>
        <p className=' text-MediumGray text-sm leading-normal'>
          Get your team in sync, no matter your location. Stramline processes, create team
          rituals, and watch productivity soar.
        </p>
        <button className=' bg-AlmostBlack text-AlmostWhite w-32 py-3 font-bold self-center rounded-xl'>Learn more</button>
      </div>
      <div className=' flex gap-6 w-[360px] px-4 flex-wrap justify-center items-center mt-8'>
        <img className=' h-3' src={databiz} />
        <img className=' h-4' src={audiphile} />
        <img className=' h-3' src={meet} />
        <img className=' h-4' src={maker} />
      </div>
    </div>
  </>
  )
}

export default App
