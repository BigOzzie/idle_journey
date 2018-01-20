import React from 'react';
import {Button} from "react-bootstrap";
import GlobalStore from "../stores/GlobalStore";
import {observer} from "mobx-react";

@observer
class App extends React.Component {
    render = () => {
        const globalStore = this.props.globalStore;

        const buttonClass = "btn " + (globalStore.test ? "btn-success" : "btn-danger");

        return (
            <div className="row">
                <div className="col-sm-4">
                    <Button onClick={globalStore.toggle}
                            className={buttonClass}
                            style={{float:"right"}}
                    >
                        {globalStore.test ? "On" : "Off"}
                    </Button>
                </div>
                <div className="col-sm-4">
                    The button is {globalStore.test ? "on" : "off"}.
                </div>
            </div>
        );
    };
}

App.defaultProps = {
    globalStore: new GlobalStore()
};

export default App;