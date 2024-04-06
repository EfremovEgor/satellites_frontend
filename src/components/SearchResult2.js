import React, { useState } from "react";

const SearchResult = ({ results, onResultSelect }) => {
  const [showResults, setShowResults] = useState(true);

  const toggleShowResults = () => {
    setShowResults(!showResults);
  };

  const handleResultSelect = (result) => {
    onResultSelect(result);
    toggleShowResults();
  };

  return (
    <div>
        <button onClick={toggleShowResults} className="absolute top-0 right-0 p-2 text-white">
                Close
        </button>
        <div
        className={`w-full bg-[#2f3134] flex flex-col shadow-lg rounded-lg mt-4 max-h-[300px] overflow-y-scroll px-3 scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-600 ${
            showResults? "" : "hidden"
        }`}
        >
            {/* <button onClick={toggleShowResults} className="absolute top-0 right-0 p-2 text-white">
                Close
            </button> */}
            {results.map((result, idx) => {
                return (
                <div key={idx} onClick={() => handleResultSelect(result)}>
                    <p className="text-white text-lg mt-1 cursor-pointer hover:bg-gray-700 py-2">
                    {result.name}
                    </p>
                </div>
                );
            })}
        </div>

    </div>
    // <div
    //   className={`w-full bg-[#2f3134] flex flex-col shadow-lg rounded-lg mt-4 max-h-[300px] overflow-y-scroll px-3 scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-600 ${
    //     showResults? "" : "hidden"
    //   }`}
    // >
    //   <button onClick={toggleShowResults} className="absolute top-0 right-0 p-2 text-white">
    //     Close
    //   </button>
    //   {results.map((result, idx) => {
    //     return (
    //       <div key={idx} onClick={() => handleResultSelect(result)}>
    //         <p className="text-white text-lg mt-1 cursor-pointer hover:bg-gray-700 py-2">
    //           {result.name}
    //         </p>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default SearchResult;