import React, {useEffect} from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';

export default function Vote() {

    let categories = [];
    let votes = [];

    useEffect(() => {
        categoriesList();
    });

    const categoriesList = async () => {
        const location = useLocation();
        const token = location.state.token;
        await axios.get('http://localhost:3000/categories', {headers: {'Authorization': 'Bearer' + token}})
            .then(response => {
                categories = response.data;
            })
    }

    const handleChange = async (event) => {
        const index = event.target.selectedIndex;
        let {categorie} = document.forms[index].id;
        const location = useLocation();
        const token = location.state.token;
        return await axios.get('http://localhost:3000/votes', {categorie}, {headers: {'Authorization': 'Bearer' + token}})
        .then(response => {
            votes = response.data;
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const location = useLocation();
        const token = location.state.token;

        let {categorie, vote} = document.forms[0];
        categorie = categorie.value;
        vote = vote.value;
        await axios.post('http://localhost:3000/add-vote', {categorie, vote}, {headers: {'Authorization': 'Bearer' + token}});
        (<Link push to="/get-vote"/>)
    }

    const location = useLocation();
    const token = location.state.token;
    const name = location.state.name;
    return(
        <div className="w-full max-w-xs">
            <div>
                <Link to="/api"
                    state={{token: token, name: name}}
                >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Api</button>
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Categorie</label>
                    <select value={categories} onChange={handleChange} name="categorie" multiple={false} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                        {categories.map(({ value, label, _id }, index) => <option id={_id} key={index} value={value}>{label}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Vote</label>
                    <select value={votes} name="vote" multiple={false} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                        {votes.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
                    </select>
                </div>
                <div>
                    <input type="submit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            </form>
        </div>
    );
}
