import React from 'react';

export default function Explanation() {
  return(
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <h2>Explanation</h2>
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><a href="/signup">SignUp</a></button><br/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><a href="/login">Login</a></button><br/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"><a href="/information">Informations</a></button><br/>
        </div>
    </div>
  );
}