import React from 'react'

export const Home = () => {


  
  

   let randi = Math.floor(Math.random() * 23);
   let randy = Math.floor(Math.random() * 3);

  
  
   //let newimage = "../islamicImg/" + rand + ".jpg";
   let imagesource = `https://islamkidunya.com/wp-content/uploads/2020/02/${randi}-${randy}.jpg`

  return (
    <div className='h-screen text-center  text-lg w-screen flex justify-center flex-col'>
    <h1 className='my-20 '>✨ Learn About Quran ❤</h1>
    <img src={imagesource} alt="" className='w-64  border mb-10 rounded-full m-auto'/>

    
    </div>
  )
}
