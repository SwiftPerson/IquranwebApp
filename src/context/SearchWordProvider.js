import React,{createContext,useContext,useState} from "react";

const SearchResultContext = createContext();

const baseurl = "https://al-quran1.p.rapidapi.com/corpus/";

export const SearchWordProvider = ({children}) => {

    const [results,setResult] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    

    const getResult = async(type) => {

        setLoading(true);

        const response = await fetch(`${baseurl}${type}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "al-quran1.p.rapidapi.com",
                "x-rapidapi-key": "16f74cb856msh57ec33a1ea32465p1211c3jsn1cb106dfc5a0"
            }
        });
       

        const data = await response.json();
        
        console.log(data);
        
        setResult(data);
        setLoading(false);


    }

    return(
        <SearchResultContext.Provider value={{getResult,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </SearchResultContext.Provider>

    )



}

export const useSearchResultContext = () => useContext(SearchResultContext);