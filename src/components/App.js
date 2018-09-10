import React from 'react';
import dataStore from "../stores/DataStore";
import {observer} from "mobx-react";
import PartyDisplay from "./Characters/PartyDisplay";
import MainContainer from "./MainContainer";

@observer
class App extends React.Component {


    render = () => {
        const dataStore = this.props.dataStore;

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 text-center">
                        <h2>HOW TO LA MULANA</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <button className="btn btn-info" onClick={() => dataStore.changeView(dataStore.VIEW_INVENTORY)}>ITEMS</button>
                            </div>
                            <div className="col-sm-4 text-center">
                                <button className="btn btn-warning" onClick={() => dataStore.changeView(dataStore.VIEW_ACCOMPLISHMENTS)}>PROGRESS</button>
                            </div>
                            <div className="col-sm-4 text-center">
                                <button className="btn btn-primary" onClick={() => dataStore.changeView(dataStore.VIEW_WHAT_TO_DO)}>WHAT DO I DO?!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        {/*<MainContainer dataStore={dataStore}/>*/}
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