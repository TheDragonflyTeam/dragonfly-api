import React from 'react';

export default function Api({user}) {
    return (
        <div className="dashboard">
            <div className="navBar">
                <img src="https://random.imagecdn.app/100/100"/>
                <p>{user}</p>
            </div>
            <div className="content">
                <div className="apiKey">API KEY : <span>ok</span></div>
                <div>
                    ok/50 calls api 
                </div>
            </div>
        </div>
    );
}