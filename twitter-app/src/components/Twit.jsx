import { useState, useEffect } from "react";
import './Twit.css'
export default function Twit( {twit, index} ){
    return(
        <>
            <div className="twit">
                <div className="username">{twit.userName}</div>
                <div className="twit-text">{twit.content}</div>      
            </div>
        </>
    )
}