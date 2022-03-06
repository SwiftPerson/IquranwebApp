import React,{useEffect,useState} from 'react'
import { useDebounce } from 'use-debounce'
import {useSearchResultContext} from "../context/SearchWordProvider";
import { SearchResult } from './SearchResult';
export const Search = () => {


  const[text,setText] = useState("");
  const {setSearchTerm} = useSearchResultContext();
  const [debounceValue]  = useDebounce(text,300);
  
  useEffect(() => {

    if(debounceValue) setSearchTerm(debounceValue)

  }, [debounceValue])
  




  return (
    <div className='text-center p-3 mt-20 '>

    <input type="text" 
     value={text} 
     className='outline-none text-black border rounded-full text-center hover:shadow-lg inputfieldexpand dark:bg-gray-200 h-10 ' 
     placeholder='Search a word...'
     onChange={(e)=>setText(e.target.value)}
     />  
     {text && (
        <button type='button' className=' text-red-500 text-2xl text-gray-500 ' onClick={()=> setText("")}>
           X
        </button>
      )}

     <div className='flex justify-center flex-col mt-20'>

      <SearchResult/>

     </div>

    </div>
  )
}
