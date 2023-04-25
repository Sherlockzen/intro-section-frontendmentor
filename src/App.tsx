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
import calendar from './images/icon-calendar.svg'
import todo from './images/icon-todo.svg'
import reminder from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const menuClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className=" font-Epilogue w-full h-screen overflow-hidden absolute sm:relative sm:max-w-full">
        <header className=" p-4 flex justify-between md:justify-normal items-center h-20">
          <span className=" font-bold text-4xl">snap</span>
          <div className=" flex items-center w-full h-10 ml-16">
            <div className=" flex items-center gap-2">
              Features
              <img
                className=" h-full"
                src={features ? arrowUp : arrowDown}
                alt="arrow icon"
              />
            </div>
            <div className=" flex flex-col gap-4 relative z-30 top-24 -left-40 w-40 items-center border-red-500 border-2">
              <div className=" flex items-center gap-4 w-full">
                <img src={todo} />
                Todo List
              </div>
              <div className=" flex items-center gap-4 w-full">
                <img src={calendar} />
                Calendar
              </div>
              <div className=" flex items-center gap-4 w-full">
                <img src={reminder} />
                Reminders
              </div>
              <div className=" flex items-center gap-4 w-full">
                <img src={planning} />
                Planning
              </div>
            </div>
          </div>
          <div className=" text-MediumGray bg-slate-600 md:hidden">
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
              <div className=" mt-20 flex flex-col gap-7 px-5 backdrop-opacity-0 ">
                <details onClick={() => setFeatures(!features)}>
                  <summary className=" list-none flex items-center gap-2 w-full">
                    Features
                    <img
                      className=" h-full"
                      src={features ? arrowUp : arrowDown}
                      alt="arrow icon"
                    />
                  </summary>
                  <div className=" flex flex-col gap-4 mt-5 ml-6">
                    <div className=" flex items-center gap-4">
                      <img src={todo} />
                      Todo List
                    </div>
                    <div className=" flex items-center gap-4">
                      <img src={calendar} />
                      Calendar
                    </div>
                    <div className=" flex items-center gap-4">
                      <img src={reminder} />
                      Reminders
                    </div>
                    <div className=" flex items-center gap-4">
                      <img src={planning} />
                      Planning
                    </div>
                  </div>
                </details>
                <details onClick={() => setCompany(!company)}>
                  <summary className=" list-none flex items-center gap-2 w-full">
                    Company
                    <img
                      className=" h-full"
                      src={company ? arrowUp : arrowDown}
                      alt="arrow icon"
                    />
                  </summary>
                  <div className=" flex flex-col gap-4 mt-5 ml-6">
                    <div className=" flex items-center gap-4">History</div>
                    <div className=" flex items-center gap-4">Our Team</div>
                    <div className=" flex items-center gap-4">Blog</div>
                  </div>
                </details>
                <div>Careers</div>
                <div>About</div>
              </div>
              <div className=" flex flex-col mt-8">
                <button className="">Login</button>
                <button className=" border-[1px] mt-2 p-1 border-black mx-4 rounded-xl">
                  Register
                </button>
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
        {/* <img src={heroMobile} alt="a man holding a laptop" /> */}
        <div className="">
          <div className=" text-center p-3 flex flex-col gap-6">
            <h1 className=" text-3xl font-bold mt-8">Make remote work</h1>
            <p className=" text-MediumGray text-sm leading-normal">
              Get your team in sync, no matter your location. Stramline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className=" bg-AlmostBlack text-AlmostWhite w-32 py-3 font-bold self-center rounded-xl">
              Learn more
            </button>
          </div>
          <div className=" flex gap-6 px-4 flex-wrap justify-center items-center mt-8">
            <img className=" h-3" src={databiz} />
            <img className=" h-4" src={audiphile} />
            <img className=" h-3" src={meet} />
            <img className=" h-4" src={maker} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
