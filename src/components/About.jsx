import React from 'react'

const About = () => {
  return (
    <div className='p-6'>

          <h1 className='font-[500] text-[25px] leading-[48px] py-5'>About Me</h1>

         <div className="max-w-4xl mx-auto ">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Academic Education */}
        <div className="relative bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1">
          <div className="  pb-5">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          <h3 className="text-md font-semibold mb-4">Academic Education</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="h-2 w-3 mr-2 bg-black/70 rounded-full mt-2 "></div>
              <p className='text-gray-600'>Govt College And University of faisalabad - Bachelor in Science (BS) in Statistics.</p>
            </div>
            <div className="flex items-start ">
              
              <p className='text-gray-600'>2020 – 2024</p>
            </div>
          </div>
        </div>

        {/* Non-Formal Education */}
        <div className="relative bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1">
          <div className="pb-5">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
            </svg>
          </div>
          <h3 className="text-md font-semibold mb-4">Non-Formal Education</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="h-2 w-2 bg-black/70 rounded-full mt-2 mr-2"></div>
              <p className='text-gray-600'>Tuition Center [TC] - Microsoft Office</p>
            </div>
            <div className="flex items-start">
              
              <p className='text-gray-600'>March – May 2023</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Experience */}
        <div className="relative bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1">
          <div className="pb-5">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
            </svg>
          </div>
          <h3 className="text-md font-semibold mb-4">Experience</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="h-2 w-2 bg-black/70 rounded-full mt-2 mr-2"></div>
              <p className='text-gray-600'>Frontend Webiste Developer</p>
            </div>
            <div className="flex items-start">
              
              <p className='text-gray-600'>June 2024 - Present</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="relative bg-white rounded-lg shadow-md p-6 border border-gray-200 flex-1">
          <div className="pb-5">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-md font-semibold mb-4">Certifications</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="h-2 w-2 bg-black/80 rounded-full mt-2 mr-2"></div>
              <p className='text-gray-600'> Website Developer</p>
            </div>
            <div className="flex items-start">
          
              <p className='text-gray-600'>Skill Software House</p>
            </div>
            
          </div>
        </div>
      </div>
    </div> 

    </div>
  )
}

export default About