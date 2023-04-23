import { useState } from 'react'
import menuOpen from './images/icon-menu.svg'
import menuClose from './images/icon-close-menu.svg'
import heroMobile from './images/image-hero-mobile.png'
import audiphile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import arrowUp from './images/icon-arrow-up.svg'
import arrowDown from './images/icon-arrow-down.svg'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  const menuClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className=" font-Epilogue w-full h-screen">
        <header className=" p-4 flex justify-between items-center h-20">
          <span className=" font-bold text-4xl">snap</span>
          <div>
            <button className=" relative z-50" onClick={menuClick}>
              <img src={isOpen ? menuClose : menuOpen} alt="close menu icon" />
            </button>
            <div
              className={
                " bg-white w-[55%] flex flex-col absolute z-30 bottom-0 h-screen ease-out" +
                (isOpen
                  ? " right-0 transation delay-150 duration-200"
                  : " -right-96 transation delay-150 duration-700")
              }
            >
              <div className=" mt-20 flex flex-col gap-4 px-5 backdrop-opacity-0">
                <details >
                  <summary className=' list-none'>Features</summary>
                  <div>algo aparece</div>
                </details>
                <div>Company</div>
                <div>Careers</div>
                <div>About</div>
              </div>
              <div className=" flex flex-col mt-8">
                <button>Login</button>
                <button>Register</button>
              </div>
            </div>
            <div
              className={
                " bg-black absolute z-20 top-0 left-0 w-screen h-screen bg-opacity-30" +
                (isOpen
                  ? " right-0 opacity-100 delay-150 duration-200"
                  : " -right-96 opacity-0 delay-150 duration-700")
              }
            ></div>
          </div>
        </header>
        <img src={heroMobile} alt="a man holding a laptop" />
        <div className=" text-center p-3 flex flex-col gap-6">
          <h1 className=" text-3xl font-bold">Make remote work</h1>
          <p className=" text-MediumGray text-sm leading-normal">
            Get your team in sync, no matter your location. Stramline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className=" bg-AlmostBlack text-AlmostWhite w-32 py-3 font-bold self-center rounded-xl">
            Learn more
          </button>
        </div>
        <div className=" flex gap-6 w-[360px] px-4 flex-wrap justify-center items-center mt-8">
          <img className=" h-3" src={databiz} />
          <img className=" h-4" src={audiphile} />
          <img className=" h-3" src={meet} />
          <img className=" h-4" src={maker} />
        </div>
      </div>
    </>
  );
}

export default App
