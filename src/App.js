import React,{useState} from 'react';
import {Navbar} from "./components/Navbar";
import {Routes} from "./components/Routes";
import {Footer} from "./components/Footer";
function App() {

  const [dark,setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
       <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>

          <Navbar darkTheme = {dark}  setDarkTheme = {setDark}/>
          <Routes/>
          <Footer/>
      </div>
   </div>
  );
}

export default App;
