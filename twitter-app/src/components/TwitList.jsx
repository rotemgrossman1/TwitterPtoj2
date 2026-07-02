import { useState, useEffect } from "react";
export default function TwitList( {twits} ){
    return(
        <>
            <div className="twitList">
                {twits.map((twit, index)=>(
                    <Twit />
                )
                )}
            </div>
        </>
    )
}