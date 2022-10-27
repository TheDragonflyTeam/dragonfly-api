import React from 'react';
import axios from 'axios';

export default class GetVote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [], votes: []};
    }

    componentDidMount() {
        this.votesList();
        this.categoriesList();
    }    

    async votesList() {
        return await axios.get('http://localhost:3000/votes')
            .then(({ results }) => this.setState({ votes: results }));
    }

    async categoriesList() {
        return await axios.get('http://localhost:3000/categories')
            .then(({ results }) => this.setState({ categories: results }));
    }

    async handleChange() {
        let {categorie} = document.forms[0];
        categorie = categorie.id;
        return await axios.get('http://localhost:3000/categorie/'+categorie, {categorie})
            .then(({ results }) => this.setState({ votes: results }));
    }

    render() {
        const categories = this.setState.categories;
        this.setState.votes;

        return(
        <div className="w-full max-w-xs">
            <ul>
                {this.state.votes.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Categorie</label>
                <select value={this.state.categories} onChange={this.handleChange} name="categorie" multiple={false} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                    {categories.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
                </select>
                </div>
            </form>
        </div>
        );
    }
}