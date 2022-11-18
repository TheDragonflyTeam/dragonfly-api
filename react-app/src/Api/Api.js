import React from 'react';
import {useLocation} from "react-router-dom";

export default function Api() {
    const location = useLocation()
    console.log(location.state)
    return (
        <div className="dashboard">
            <div className="navBar">
                <img src="https://random.imagecdn.app/100/100"/>
                <p>{location.state.name}</p>
            </div>
            <div className="content">
                <div className="apiKey">Token : <span>{location.state.token}</span></div>
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
