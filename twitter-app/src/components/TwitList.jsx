import { useState, useEffect } from "react";
import Twit from "./Twit";
import './TwitList.css'
export default function TwitList( {twits} ){
    return(
        <>
            <div className="twitList">
                {twits.map((twit, index)=>(
                    <Twit 
                        key={index}
                        twit={twit}   
                    />
                )
                )}
            </div>
        </>
    )
}