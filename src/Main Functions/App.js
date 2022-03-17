import React from "react";
import CardsInfo from './CardsInfo';
// import { list } from './list';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from "../Components/ErrorBoundary";
import './App.css';

// MAIN CONTAINER WHICH HAS ALL FUNCTIONS & COMPONENTS TOGETHER TO MAKE IT WORK

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            searcharea: ''
        }
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>this.setState({list:users}));
    }

    onSearchChange = (event) => {
        this.setState({ searcharea: event.target.value })
    }

    render() {
        const filteredResult = this.state.list.filter(item => {
            return item.name.toLowerCase().includes(this.state.searcharea.toLowerCase())
        })
        if(this.state.list.length === 0){
            return <h1 className="tc">LOADING.....</h1>
        }
        else {
        return (
            <div className="tc">
                <h1 className="f1">FriendsBook</h1>
                <SearchBox searchChange= {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                <CardsInfo list= {filteredResult}/>
                   </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    }
   
}

export default App;