import './Cover.css'
import isaacPfp from './assets/isaac-chan-pfp.jpg'

function Cover() {
  return (
    <>
      <div className='main-content'>
        <div className='cover'>
          <div className='text-wrapper'>
            <h1>Hey, I'm Isaac.</h1>
            <p>I'm a rising sophomore majoring in Computer Science at Boston University with a deep interest in software engineering.</p>
            <p>This website will give you a brief intro to me...</p>
          </div>
          <div className='isaac-pfp'>
            <img src={isaacPfp}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover
