import React from 'react';

export default class Api extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {calls: 0, username: ''}
    }

    componentDidMount() {
        this.getCalls();
        this.getUsername();
    }

    getCalls() {
        this.setState({calls: 4});
    }

    getUsername() {
        this.setState({username: 'Toto'});
    }

    render() {
        return (
            <div className="dashboard">
                <div className="navBar">
                    <img src="https://random.imagecdn.app/100/100"/>
                    <p>{this.state.username}</p>
                </div>
                <div className="content">
                    <div className="apiKey">API KEY : <span>{this.props.getUser}</span></div>
                    <div>
                        {this.state.calls}/50 calls api 
                    </div>
                </div>
            </div>
        );
    }

}