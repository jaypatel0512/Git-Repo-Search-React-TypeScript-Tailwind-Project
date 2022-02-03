import React from "react";
import { useState } from "react";
import Bookmark from "./Bookmark";


const Results = (props: any) => {
    //get and store the api data
    let { repos } = props;
    
    //set state to save bookmark in string array
    const [bookmark, setBookmark] = useState<string[]>([])
  
    
    function addBookmark(name: string) {
        
        setBookmark((bookmarks) => [
            ...bookmarks,
            name,
          ]);

          <Bookmark bookmark={bookmark}/>
        
    }
  

    //list and fetch the data
    const listRepos = repos.length !== 0 ? (
        repos.map((item: any) => <li key={item.id}> {item.name}<button onClick={() => addBookmark(item.name)} className="text-2xl hover:text-red-600">  +  </button></li>)
    ) : (<li>No Repos Searched</li>);

    //list and fetch book mark list
    const listBookmark = bookmark.length !==0 ?(
        bookmark.map((list) => <li>{list}</li>)):(
            <li>No bookmarks Added</li>
        )

        console.log(listBookmark);
    return (
        //display the list
        <div>
            <ul className="list-none md:list-disc">
                <h1 className="font-medium text-black-bold">List of Repos</h1>
                <li className="text-x1 text-black">
                    {listRepos}
                </li>
            </ul>
            <ul className="list-none md:list-disc">
                <h1 className="font-medium text-black-bold">List of Bookmark</h1>
                <li className="text-x1 text-black">
                    {listBookmark}
                    
                </li>
            </ul>
           
           
        </div>

    )
};

export default Results;

