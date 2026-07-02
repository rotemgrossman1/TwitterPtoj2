import CreateTwit from "../components/CreateTwit";
import TwitList from "../components/TwitList";
import { useState , useEffect} from "react";
import './HomePage.css'
function HomePage() {
    
    // const[twitsArr, setTwits] = useState(() => {
    //     const savedTwits = localStorage.getItem("myTweets")
    //     return savedTwits ? JSON.parse(savedTwits) : []
    // });
    const[twitsArr, setTwits] = useState([])
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleAddTwit=(twitText) =>{
        const newTwitObj = {
            content: twitText,
            username: 'rotemg',
            date: new Date().getTime()
        }
        const updatedTwitsArr = [newTwitObj, ...twitsArr];
        setTwits(updatedTwitsArr)
        localStorage.setItem("myTweets", JSON.stringify(updatedTwitsArr))
    }
    useEffect(() => {
        
        async function fetchTweets(){
            setLoading(true)
            try{
                const response = await fetch(`https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih`)
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
    
    return(
        <>
            <CreateTwit onSubmit={handleAddTwit}/>
            <TwitList twits={twitsArr}/>
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
        </>
    )
}

export default HomePage