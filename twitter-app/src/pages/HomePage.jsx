import CreateTwit from "../components/CreateTwit";
import TwitList from "../components/TwitList";
import { useState , useEffect} from "react";
import './HomePage.css'
import dummyTweets from "./dummyTweets.json";
import {useTweet} from '../context/TweetContext'
function HomePage() {
const {twitsArr, setTwits,loading, setLoading, error, setError, handleAddTwit, username, setUsername} = useTweet()
    
    return(
        <>
            <CreateTwit onSubmit={handleAddTwit}/>
            {loading && (
                    <div className="loading-display">
                        LOADINGGGGG
                    </div>
                )}
            {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
            <TwitList twits={twitsArr}/>
            
        </>
    )
}

export default HomePage