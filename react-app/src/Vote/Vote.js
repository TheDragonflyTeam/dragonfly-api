import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [], votes: []};
    }

    componentDidMount() {
        this.categoriesList();
    }    

    async categoriesList() {
        await axios.get('http://localhost:3000/categories')
            .then(response => {
                this.setState({categories: response.data});
            })
    }

    handleChange = async (event) => {
        const index = event.target.selectedIndex;
        let {categorie} = document.forms[index].id;
        return await axios.get('http://localhost:3000/votes', {categorie})
        .then(response => {
            this.setState({votes: response.data});
        })
    }

    render() {
        const categories = this.state.categories;
        const votes = this.state.votes;
        const handleSubmit = async (event) => {
            event.preventDefault();
    
            let {categorie, vote} = document.forms[0];
            categorie = categorie.value;
            vote = vote.value;
            await axios.post('http://localhost:3000/add-vote', {categorie, vote});
            (<Link push to="/get-vote"/>)
        }
        
        return(
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Categorie</label>
                    <select value={this.state.categories} onChange={this.handleChange} name="categorie" multiple={false} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                        {categories.map(({ value, label, _id }, index) => <option id={_id} key={index} value={value}>{label}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Vote</label>
                    <select value={this.state.votes} name="vote" multiple={false} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
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
}