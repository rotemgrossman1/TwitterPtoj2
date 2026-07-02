import { useState, useEffect } from "react";
import './CreateTwit.css'
export default function CreateTwit( {onSubmit} ){
    const [twit, setTwit] = useState("");
    const handleChange = (event) =>{
        setTwit(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        onSubmit(twit)//call the function from HomePage to add the note to the list
        setTwit("")
    }
    const isInvalid = twit.length === 0 || twit.length > 140;
    const isTooLong = twit.length > 140;
    return(
        <>
            <form onSubmit={handleSubmit}>
                <textarea
                    id = "twit"
                    value = {twit}
                    onChange={handleChange}
                    rows={5}
                    cols={40}
                    placeholder='Enter your twit here...'
                />
                <button type="submit" disabled={isInvalid}>Add Twit</button>
                {isTooLong && (
                    <div className="error-message">
                        The tweet can't contain more than 140 chars.
                    </div>
                )}
            </form>
        </>
    )
}