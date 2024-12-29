import React, {useRef} from 'react'

const App = () => {
  const boxRef = useRef(null)

  function randomColor(){
    const value1 = Math.floor(Math.random()*256)
    const value2 = Math.floor(Math.random()*256)
    const value3 = Math.floor(Math.random()*256)
    boxRef.current.style.backgroundColor = `rgb(${value1},${value2},${value3})`

  }

  return (
    <div className='flex justify-center items-center flex-col h-screen gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='h-52 w-[70%]   border-2 border-black mix-blend-multiply bg-blue-400 shadow-2xl shadow-black' id="box" ref={boxRef}><h1 className='font-semibold text-8xl text-center mt-10 '>HELLO EVERYONE</h1></div>
      <button className='h-20 w-20  border-white-500 border-2 rounded-md px-2 py-2 mt-5 ml-5 shadow-lg shadow-white text-2xl' onClick={randomColor}>click</button>
      </div>
  )
}

export default App
