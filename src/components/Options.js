import React from 'react';
import {observer} from "mobx-react";

@observer
class Options extends React.Component {
    render = () => {
        const dataStore = this.props.dataStore;

        return (
            <div className="col-12">
                <button className="btn btn-lg btn-danger" onClick={() => {dataStore.resetData();}}>RESET DATA</button>
            </div>
        );
    };
}

export default Options;