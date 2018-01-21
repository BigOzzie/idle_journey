import React from 'react';
import GameDataStore from "../stores/GameDataStore";
import {observer} from "mobx-react";
import Character from "../stores/Character";
import PartyDisplay from "./Characters/PartyDisplay";
import MainContainer from "./MainContainer";

@observer
class App extends React.Component {
    render = () => {
        const gameDataStore = this.props.gameDataStore;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 style={{textAlign: "center"}}>Journey</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <PartyDisplay party={gameDataStore.party}/>
                    </div>
                    <div className="col-sm-8">
                        <MainContainer gameDataStore={gameDataStore}/>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
        );
    };
}

let gameDataStore = new GameDataStore();
gameDataStore.party.mainCharacter = new Character();

App.defaultProps = {
    gameDataStore: gameDataStore
};

export default App;