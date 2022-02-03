import React from "react";
import Navbar from "./Navbar";

const Bookmark = (bookmark) =>{

    {console.log("books are",bookmark)}
    return(
        <div className="p-6 max-w-sm mx-auto bg-emerald-200 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
        </div>
        <div>
            <div className="text-xl font-large font-bold text-sky-500/100">{bookmark}</div>
            
        </div>
    </div>

        
    )
}

export default Bookmark;