import React, { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../supabaseClient";
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
            user_name: username, 
            date: new Date().toISOString()
        };
        try{
            const { data, error: supabaseError } = await supabase
                .from('Tweets')
                .insert([newTwitObj])
                .select();

            if (supabaseError) throw supabaseError;

            if (data && data.length > 0) {
                setTwits((prevTwits) => [data[0], ...prevTwits]);
            }
        }catch (err) {
            console.error(err);
            setError("Failed to post tweet. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    // function to use when the api works
    useEffect(() => {
        async function fetchTweets(){
            try{
                const { data, error: supabaseError } = await supabase
                    .from('Tweets')
                    .select('*')
                    .order('twitId', { ascending: false });

                if (supabaseError) throw supabaseError;

                setTwits(data || []);
            }catch (err) {
                console.error("Error loading data from Supabase:", err);
            } finally {
                if(twitsArr.length === 0){
                    setLoading(false);
                }
            }
        }
        fetchTweets()
        const IntervalId = setInterval(() =>{
            fetchTweets()
        }, 5000);
        return()=>{
            clearInterval(IntervalId)
        }
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
