import React from 'react';

export const Descriptor = ({descriptor, userInput}) => {
    return (
    <div className="m-1 flex rounded-md display:flex bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="w-1/4 p-5 bg-indigo-900 rounded-l-md text-indigo-50 font-mono">{descriptor}</div>
        <div className="p-5 w-3/4">{userInput}</div>
      </div>
    )
}

export default Descriptor;