import React from 'react'
import Pulse from 'react-reveal/Pulse';
export const InfoQuran = () => {
  return (

    <div className='overflow-hidden'>
     
     <div className='w-screen text-center p-5 my-20'>
       <h1 className='text-3xl  font-mono '>Info About <span className='text-green-400 underline font-bold dark:text-red-400'>Quran</span></h1>
     </div>
     
    <div className='flex justify-center flex-wrap'>

      <div className='grid grid-cols-2 gap-4 containerInfo  md:grid-cols-3 '>
      <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900  '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>💖</p>  
              <p className=' min-w-fit my-10'>Total Number of surahs</p>
              <p className='-my-8'>114</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🕋</p>  
              <p className=' min-w-fit my-10'>Total maccan  surahs</p>
              <p className='-my-8'>89</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>✨</p>  
              <p className=' min-w-fit my-10'>Total Medinan Surahs</p>
              <p className='-my-8'>25</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>📄</p>  
              <p className=' min-w-fit my-10'>Total Verses</p>
              <p className='-my-8'>6236</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🗞</p>  
              <p className=' min-w-fit my-10'>Number of Words</p>
              <p className='-my-8'>77430</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🏷</p>  
              <p className=' min-w-fit my-10'>Number of Unique Words</p>
              <p className='-my-8'>18994</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🌸</p>  
              <p className=' min-w-fit my-10'>Number of Stems</p>
              <p className='-my-8'>12183</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🍁</p>  
              <p className=' min-w-fit my-10'>Number of Lemmas</p>
              <p className='-my-8'>3382</p>
          </div>    
        </div>
        </Pulse>
        <Pulse>
        <div className='expand border border-gray-30 hover:shadow-lg rounded-lg bg-green-200 dark:bg-green-900 '> 
          <div className='text-center'> 
              <p className='my-10 text-3xl'>🌱</p>  
              <p className=' min-w-fit my-10'>Number of Roots</p>
              <p className='-my-8'>1685</p>
          </div>    
        </div>
        </Pulse>
      </div>
    </div>
    
     
    </div>
  
  
    )
}
