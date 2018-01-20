import React from 'react';
import {Button} from "react-bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: true};

        this.flipButton = this.flipButton.bind(this);
    }

    flipButton() {
        this.setState({test: !this.state.test});
    }

    render() {
        return <div>
            <Button onClick={this.flipButton}>{this.state.test ? "On" : "Off"}</Button>
        </div>;
    }
}

export default App;