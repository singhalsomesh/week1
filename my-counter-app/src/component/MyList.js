import React from 'react';

function MyList({ results }){
  console.log(results)  
  return (
    <ul>
      {results && results.map((username, index) => (
        <li key={index}><span>{username}</span></li>
      ))}
    </ul>
  );
};

export default MyList