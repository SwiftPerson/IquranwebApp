import React,{useEffect} from 'react'
import {useSearchResultContext} from "../context/SearchWordProvider";
import { Loading } from './Loading';
import Fade from 'react-reveal/Fade';

export const SearchResult = () => {

    const { results ,isLoading,getResult,searchTerm } = useSearchResultContext();


    useEffect(() => {
     if(searchTerm){

        getResult(searchTerm);
     
    }

    }, [searchTerm])
    


    if(isLoading) return <Loading/>

    return (
        <div className='bg-gray-200 dark:bg-gray-800 p-5 border rounded'>

          {results?.map(({content,surah_no,verse_no},index) =>(
              surah_no &&
              <Fade bottom>
              <div key={index} className = "md: w-2/5 w-full  border-b mb-5 border-black dark:border-white">
                  <h1 className='text-black dark:text-yellow-500'>{content}</h1>
                  <div className='bg-green-400 dark:bg-orange-500 py-3 my-5'>
                  <p>surah : {surah_no}</p>  
                  <p>Verse : {verse_no}</p>  
                  </div>
              </div>  
              </Fade>

          ))}


        </div>
    )
}
