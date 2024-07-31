//import './Cover.css'
import isaacPfp from './assets/isaac-chan-pfp.jpg'

function Cover() {
  return (
    <div className="mt-[-4rem] mb-[10rem] sm: max-w-[400px] md:mt-[5rem] md:mb-[22rem] flex flex-col relative md:max-w-5xl m-auto">
      <div className="mt-[4rem] flex flex-col-reverse gap-[20px] md:flex-row justify-between items-center">
        <h3 className="bottom-[9rem] left-[12rem] text-[25px] sm:bottom-[12.5rem] sm:left-[12rem] md:top-[5.5rem] absolute md:left-[15rem] md:text-[50px] w-[70px] animate-blink-shadow">🌙</h3>
        <div className='flex flex-col max-w-md gap-[15px] w-full'>
          <h1 className="text-[30px] sm:text-left">Hey, I'm Isaac.</h1>
          <p className="text-[15px] sm:text-[20px] text-left">I'm a rising sophomore majoring in Computer Science at Boston University with a deep interest in software engineering.</p>
          <p className="text-[15px] sm:text-[20px] text-left">This website will give you a brief intro to me 😊</p>
        </div>
        <div className='w-[340px] h-[340px] flex-none md:w-[450px] md:h-[450px] md:flex-none'>
          <img className="w-full h-full md:w-[450px] md:h-[450px] object-cover rounded-[30%] border-[3px] border-moonYellow" src={isaacPfp}/>
        </div>
      </div>
    </div>
  )
}

export default Cover
