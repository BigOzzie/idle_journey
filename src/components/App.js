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
                <div className="row">
                    <div className="col-sm-12">
                        <h2 style={{textAlign: "center"}}>HOW TO LA MULANA</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={() => dataStore.changeView(dataStore.VIEW_INVENTORY)}>ITEMS</button>
                        <button onClick={() => dataStore.changeView(dataStore.VIEW_ACCOMPLISHMENTS)}>PROGRESS</button>
                        <button onClick={() => dataStore.changeView(dataStore.VIEW_WHAT_TO_DO)}>WHAT DO I DO?!</button>
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