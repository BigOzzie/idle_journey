import React from 'react';
import dataStore from "../stores/DataStore";
import {observer} from "mobx-react";
import MainContainer from "./MainContainer";

@observer
class App extends React.Component {


    render = () => {
        const dataStore = this.props.dataStore;

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2>HOW TO LA MULANA</h2>
                    </div>
                </div>
                <div className="row justify-content-center" style={{"marginBottom": "1em"}}>
                    <div className="col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-3 text-center">
                                <button className="btn btn-lg btn-info" onClick={() => dataStore.changeView(dataStore.VIEW_INVENTORY)}>ITEMS</button>
                            </div>
                            <div className="col-3 text-center">
                                <button className="btn btn-lg btn-warning" onClick={() => dataStore.changeView(dataStore.VIEW_ACCOMPLISHMENTS)}>PROGRESS</button>
                            </div>
                            <div className="col-3 text-center">
                                <button className="btn btn-lg btn-primary" onClick={() => dataStore.changeView(dataStore.VIEW_WHAT_TO_DO)}>WHAT DO I DO?!</button>
                            </div>
                            <div className="col-3 text-center">
                                <button className="btn btn-lg btn-default" onClick={() => dataStore.changeView(dataStore.VIEW_OPTIONS)}>OPTIONS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <MainContainer dataStore={dataStore}/>
                    </div>
                </div>
            </div>
        );
    };
}

App.defaultProps = {
    dataStore: dataStore
};

export default App;