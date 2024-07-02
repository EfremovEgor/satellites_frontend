import { useState } from "react";
import SearchBar from "./SearchBar2";
import SearchResult from "./SearchResult2";

const Search = () => {
    const [result, setResult] = useState([])

    const [selectedResult, setSelectedResult] = useState(null);

    const handleResultSelect = (result) => {
        setSelectedResult(result);
    };

    return ( 
        <div className="fixed z-10 flex justify-center items-end flex-col pt-5 pr-5 min-w-[400px] w-full">
            <div className="w-2/5">
                <SearchBar setResult = {setResult}/>
                <div>
                    <SearchResult results = {result} onResultSelect={handleResultSelect}/>
                    {selectedResult && <div>{selectedResult.name}</div>}
                </div>
            </div>
        </div>
     );
}
 
export default Search; 