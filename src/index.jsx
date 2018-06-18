import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import  VideoList from './components/video-list';
const ApiKey = 'AIzaSyAqxyVRbUTmGH_kLl01t4kZ-B85lkAGETc';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        YTSearch({
            key: ApiKey,
            term: 'reactjs'
        }, videos => this.setState({ videos }));

    }
    render() {
        return (<div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
