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
        const buttonClass = "btn " + (this.state.test ? "btn-success" : "btn-danger");

        return (
            <div className="row">
                <div className="col-sm-4">
                    <Button onClick={this.flipButton}
                            className={buttonClass}
                            style={{float:"right"}}
                    >
                        {this.state.test ? "On" : "Off"}
                    </Button>
                </div>
                <div className="col-sm-4">
                    The button is {this.state.test ? "on" : "off"}.
                </div>
            </div>
        );
    }
}

export default App;