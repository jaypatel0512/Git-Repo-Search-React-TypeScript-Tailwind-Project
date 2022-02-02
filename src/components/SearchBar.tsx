
import React, { useState } from "react";
import Results from "./Results";
import axios from 'axios';
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('') //get the search input
    const [repos, setRepos] = useState('') // to store and get the api data

    //search input and assing value to repo after click event using useStata
    const handleClick = async () => {
        const BASE_URL = "https://api.github.com";

        const getUserGithubRepos = async (username: any) => {
            const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
            return await axios.get(url);
        };

        const result = (await getUserGithubRepos(searchInput)).data

        setRepos(result);

    }
    return (

        <div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                </div>
                <div>
                    <div className="text-xl font-medium text-black">Search User</div>
                    <div>
                        <input type="text"
                            placeholder="search"
                            value={searchInput}
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => setSearchInput(ev.target.value)} //on key change by getting target value
                        />
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <p className="text-slate-500"><Results repos={repos} /></p>
                </div>
            </div>

            
        </div>
        //passing prop to result as repos
    )
};

export default SearchBar;