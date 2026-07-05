import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create the Context
const TweetContext = createContext();

// 2. Create the Provider Component
export function TweetProvider({ children }) {
    const[twitsArr, setTwits] = useState([])
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [ username, setUsername] = useState("default")
    const handleAddTwit = async (twitText) =>{    
        setLoading(true)
        setError(null)
        const newTwitObj = {
            content: twitText,
            userName: username,
            date: new Date().toISOString()
        }

        try{
           const response = await fetch("https://lrazzxpwhdtmxcetgtng.supabase.co/rest/v1/Tweets?order=date.desc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB",
                "Authorization": "Bearer sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB"
            },
            body: JSON.stringify(newTwitObj)
        });
            if(!response.ok){
                throw new Error("failed to post tweet to server")
            }
            setTwits((prevTwits) => [newTwitObj, ...prevTwits])
        }catch(err){
            setError("Coludnt submit tweet please try again")
            console.error(err)
        }finally{
            setLoading(false)
        }
    }

    // function to use when the api works
    useEffect(() => {
        async function fetchTweets(){
            setLoading(true)
            try{
            const response = await fetch("https://lrazzxpwhdtmxcetgtng.supabase.co/rest/v1/Tweets?order=date.desc", {
                    method: "GET",
                    headers: {
                        "apikey": "sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB",
                        "Authorization": "Bearer sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB"
                    }
                });
                const data = await response.json()
                setTwits(data)
                setLoading(false)
            }catch{
                setLoading(false)
                console.error("couldnt load the data from the api")
            }
        }
        fetchTweets()
    },[])
    return (
    <TweetContext.Provider value={{twitsArr, setTwits,loading, setLoading, error, setError, handleAddTwit, username, setUsername}}>
        {children}
    </TweetContext.Provider>
    );
}
export function useTweet() {
  const context = useContext(TweetContext);

  // Check if context is undefined (meaning it's being used outside the Provider)
  if (!context) {
    throw new Error("useTweet must be used within a TweetProvider");
  }
  return context;
}
