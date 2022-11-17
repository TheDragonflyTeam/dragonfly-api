import React from 'react';

export default function Explanation() {
  return(
    <div>
        <h2>Explanation</h2>
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><a href="/signup">SignUp</a></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><a href="/login">Login</a></button>
        </div>
    </div>
  );
}