import Header from './components/Header'
import './App.css'

const imgImage2 = "/assets/image2.png";
const imgBackground = "/assets/background.svg";
const imgLine1 = "/assets/line1.svg";

function App() {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full pointer-events-none z-0">
        <div className="absolute h-[1053.857px] left-0 top-[-3.37px] w-full min-w-[2200px]">
          <img alt="" className="block w-full h-full object-cover" src={imgBackground} />
        </div>
        <div className="absolute h-[590px] left-0 top-[467.63px] w-full min-w-[2200px]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
        </div>
        <div className="absolute h-[590px] left-0 top-[467.63px] w-full min-w-[2200px]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
        </div>
        {/* Header Line */}
        <div className="absolute h-0 left-0 top-[120.34px] w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
      </div>
    </>
  )
}

export default App
