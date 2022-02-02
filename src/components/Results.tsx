import React from "react";
import { useState } from "react";


const Results = (props: any) => {
    //get and store the api data
    let { repos } = props;


    const test: any = [];
    

    function addBookmark(name: string) {

        test.push(name);
        console.log(test);
        
    }

    //list and fetch the data
    const listRepos = repos.length !== 0 ? (
        repos.map((item: any) => <li key={item.id}> {item.name}<button onClick={() => addBookmark(item.name)} className="text-2xl hover:text-red-600">  +  </button></li>)
    ) : (<li>no Repos</li>);

    return (
        //display the list
        <div>
            <ul className="list-none md:list-disc">
                <li>{listRepos}</li>
            </ul>
            <ul className="list-none md:list-disc">
                <h1>List of Bookmarks</h1>
                <li>{test}</li>
            </ul>
        </div>

    )
};

export default Results;