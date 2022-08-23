import React, { useEffect, useState, useContext } from "react";


const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = React.createContext();
const AppProvider=({children})=>{

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState([])
    const [query, setQuery] = useState("Avengers")

    const getMovies=async(url)=>{
        try{
            const resp = await fetch(url)
            const data = await resp.json();
            console.log(data)

            if(data.Response === "True"){
                setIsLoading(false)
                setMovie(data.Search);
            }
            else{
                setIsError(
                    { show : true,
                       msg : data.error,}
                )
            }
        }
        catch(error){
            console.log(error)
        }

    }

//    Debonce means when we are searching any movie and  when we finish after that time interval which we give get our Result. in this below we give 2 second time so when we complete movie name after 2 second we get our result.

    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        }, 500)
        return () => clearTimeout(timerOut)
    },[query])
    
    return (
        <AppContext.Provider value={{isLoading, isError, movie,query, setQuery}}>{children}</AppContext.Provider>

    )

}


const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext};