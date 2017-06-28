import React from 'react';
import {render} from 'react-dom';
import Navbar from './Navbar.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));