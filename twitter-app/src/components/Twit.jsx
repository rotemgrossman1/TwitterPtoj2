import { useState, useEffect } from "react";
import './Twit.css'
export default function Twit( {twit, index} ){
    return(
        <>
            <div className="twit">
                {twit.content}
                {twit.userName}
            </div>
        </>
    )
}