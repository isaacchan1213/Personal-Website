//import './Cover.css'
import isaacPfp from './assets/isaac-chan-pfp.jpg'

function Cover() {
  return (
    <div className="flex flex-col relative max-w-5xl m-auto top-[50px]">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className='flex flex-col max-w-md  gap-[15px]'>
          <h1 className="text-left">Hey, I'm Isaac.</h1>
          <p className="text-[20px] text-left">I'm a rising sophomore majoring in Computer Science at Boston University with a deep interest in software engineering.</p>
          <p className="text-[20px] text-left">This website will give you a brief intro to me 😊</p>
        </div>
        <div className='isaac-pfp w-[450px] h-[450px]'>
          <img className="w-[450px] h-[450px] object-cover rounded-[30%] border-[3px] border-moonYellow" src={isaacPfp}/>
        </div>
      </div>
    </div>
  )
}

export default Cover
