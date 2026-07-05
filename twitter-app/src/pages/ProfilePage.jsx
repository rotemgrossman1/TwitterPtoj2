
import {useState} from 'react'
import './ProfilePage.css'
import {useTweet} from '../context/TweetContext'
export default function ProfilePage(){
    const  {username, setUsername} = useTweet()
    const [localUsername, setLocalUsername] = useState("");
    const handleChange = (event) =>{
        setLocalUsername(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        setUsername(localUsername)
        setLocalUsername("")
    }
    return(
        <>
            <div className="profile-info">
                <h2>Current User: {username || 'No username set'}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <textarea
                    id = "username"
                    value = {localUsername}
                    onChange={handleChange}
                    rows={3}
                    cols={40}
                    placeholder='Enter your Username here...'
                />
                <button type="submit">Add Username</button>
            </form>
        </>
    )

}