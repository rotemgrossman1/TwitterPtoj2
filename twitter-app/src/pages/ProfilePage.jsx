
import {useState} from 'react'
export default function ProfilePage( {username, setUsername} ){
    const [localUsername, setLocalUsername] = useState(username);
    const handleChange = (event) =>{
        setLocalUsername(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        setUsername(localUsername)
    }
    return(
        <>
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