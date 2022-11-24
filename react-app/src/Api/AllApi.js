import React from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import {useState} from 'react';


export default function AllApi() {
    const location = useLocation();
    const [resultCategories, setResultCategories] = useState([]);
    const [resultCitoyens, setResultCitoyens] = useState([]);
    const [addVotes, setAddVote] = useState([]);

    const categories = async() => {
        let categories = [];
        await axios.get('http://localhost:3000/categories', {headers: {'Authorization': 'Bearer ' + location.state.token}})
            .then(response => {
                console.log(response);
                response.data.forEach(categorie => {
                    getVotes(categorie._id).then(votes => {
                        categories.push({'label': categorie.label, 'votes': votes.data});
                    });
                });
                setResultCategories(categories);
            })
    }

    async function citoyens() {
        await axios.get('http://localhost:3000/citoyens', {headers: {'Authorization': 'Bearer ' + location.state.token}})
            .then(response => {
                setResultCitoyens(response.data);
            })
    }

    async function addVote() {
        await axios.post('http://localhost:3000/add-vote', 
        {
            body: {
                label: 'new vote',
                categorie: ['635a8affd7116f3789dd33c4'],
                citoyen: ['635a7375d7116f3789dd33bc'],
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + location.state.token
            }
        }).then(response => {
            console.log(response);
            setAddVote(response.data);
        })

        console.log(addVotes);
    }

    const getVotes = (id) => {
        return axios.get('http://localhost:3000/votes/'+id, {headers: {'Authorization': 'Bearer ' + location.state.token}});
    }

    return (
        <div className='flex justify-center items-center flex-col w-screen h-screen'>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={categories}>/categories</button>
                <div>
                    {
                        resultCategories.map((categorie) => (
                            <div key={ categorie._id }>
                                <h2>{ categorie.label }</h2>
                            </div>
                        ))
                    }    
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={citoyens}>/citoyens</button>
                <ul>
                    {
                        resultCitoyens.map((citoyen) => <li key={citoyen._id}>{citoyen.firstname}</li>)
                    }    
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={addVote}>/add-vote</button>
            </div>
        </div>
    );
}
