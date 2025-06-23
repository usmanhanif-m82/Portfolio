import React from 'react'

const Hero = () => {
  return (
    <div className='py-6 sm:py-8'>
      <div className='max-w-full mx-auto px-4 sm:px-5'>
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
          <div>
            <h1 className='font-[500] text-[28px] sm:text-[35px] leading-[36px] sm:leading-[48px]'>
              Hey👋, I'm Usman!
            </h1>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:space-x-4'>
            <div className='flex items-center'>
              <div className='relative mr-2 flex items-center justify-center'>
                <div className='h-3 w-3 bg-green-400 rounded-full animate-ping absolute opacity-75' 
                     style={{ animationDuration: '2s' }}></div>
                <div className='h-1 w-1 bg-green-500 rounded-full relative z-10'></div>
              </div>
              <span className='text-[12px] sm:text-[14px]'>Available for all projects</span>
            </div>
            <button className='text-white bg-black px-3 sm:px-4 py-1 rounded-md text-[12px] sm:text-[14px] w-full sm:w-auto'>
              <a href='/contact'>Contact Me</a>
            </button>
          </div>
        </div>

        {/* Description */}
        <div className='py-4 sm:py-5'> 
          <h1 className='text-gray-500 text-[13px] sm:text-[15px] leading-[20px] sm:leading-[22px]'>
            I'm Usman Hanif, a dedicated Full Stack Developer skilled in Next.js, React, Node.js, and modern JavaScript. I specialize in building fast, scalable, and interactive web applications with clean architecture and seamless user experiences. From backend APIs to dynamic frontends, I focus on delivering robust digital solutions that meet real business needs.
          </h1>
        </div>

        {/* Skills Cards */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 justify-center">
          {/* Next.js Card */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor" className="text-black dark:text-white"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3">Next.js</h3>
            <p className="text-gray-600 text-center text-[13px] sm:text-[15px]">The React Framework for production with hybrid static & server rendering</p>
          </div>

          {/* Node.js Card */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <path fill="#83CD29" d="M112.8 31.2l-8.3-4.7-48.3 27.9-3.3 1.9-3.3-1.9L3.5 26.5l-3.4-2v78.9l55.2 31.9 3.4 2 3.4-2 55.2-31.9.1-79zM7.1 99.7V32.9l48.3 27.9v55.8zm104.6-1.9L63.4 125.5V71.6l48.3-27.9z"/>
                <path fill="#83CD29" d="M63.4 102.4c-11.5 0-20.7-5.2-20.7-11.7s9.3-11.7 20.7-11.7c4.3 0 8.2.8 11.3 2.2l3.1-5.3c-3.8-1.9-8.6-3-13.8-3-15.2 0-27.5 7.3-27.5 18.5s12.3 18.5 27.5 18.5c5.9 0 11.2-1.3 15.3-3.5l-3.1-5.1c-3.3 1.5-7.4 2.3-12.2 2.3zm27.6-3.5V62.1h6.6v36.8z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3">Node.js</h3>
            <p className="text-gray-600 text-center text-[13px] sm:text-[15px]">JavaScript runtime built on Chrome's V8 engine for server-side applications</p>
          </div>

          {/* JavaScript Card */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
                <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3">JavaScript</h3>
            <p className="text-gray-600 text-center text-[13px] sm:text-[15px]">High-level programming language that conforms to the ECMAScript specification</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero