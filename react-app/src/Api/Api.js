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
            <div>
                <p>Les différentes requêtes api</p>
                <p>/login</p>
                <p>/add-choix</p>
                <p>/choix/:id</p>
                <p>/add-vote</p>
                <p>/citoyens</p>
                <p>/citoyen/:id</p>
                <p>/votes/:id</p>
                <p>/categories</p>
                <p>/register</p>
            </div>
        </div>
    );
}