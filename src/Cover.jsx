//import './Cover.css'
import isaacPfp from './assets/isaac-chan-pfp.jpg'

function Cover() {
  return (
    <div className="flex flex-col relative items-center max-w-[400px] xs:mt-[90px] sm:mt-[0] md:mt-[5rem] md:max-w-5xl m-auto lg:mb-[80px] lg:mt-[90px]">
      <div className="flex flex-col-reverse gap-[20px] md:flex-row justify-between items-center">
        <h3 className="animate-up-down bottom-[8.5rem] left-[13.5rem] text-[20px] sm:bottom-[11.5rem] sm:left-[14rem] sm:text-[30px] md:top-[3.5rem] md:left-[17.5rem] lg:top-[5.5rem] absolute lg:left-[15rem] lg:text-[50px] w-[70px]">🌙</h3>
        <div className='flex flex-col max-w-md gap-[15px] w-full items-center'>
          <h1 className="text-[30px] sm:text-left w-[350px] md:w-[450px]">Hey, I'm <span className="animate-blink-shadow">Isaac.</span></h1>
          <p className="text-[15px] w-[350px] sm:text-[20px] md:w-[450px] text-left">A passionate and driven individual who is interested in building technical solutions to modern day problems.</p>
          <p className="text-[15px] w-[350px] sm:text-[20px] md:w-[450px] text-left">Feel free to learn more about me below!</p>
        </div>
        <div className='w-[340px] h-[340px] flex-none md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] md:flex-none'>
          <img className="w-full h-full lg:w-[450px] lg:h-[450px] object-cover rounded-[30%] border-[3px] border-moonYellow" src={isaacPfp}/>
        </div>
      </div>
    </div>
  )
}

export default Cover
