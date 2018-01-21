import React from 'react';
import {observer} from "mobx-react";

@observer
class MainContainer extends React.Component {
    render = () => {
        const gameDataStore = this.props.gameDataStore;
        console.dir(gameDataStore.currentEvent.getBody(gameDataStore));

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="game-container">
                        <h5>{gameDataStore.currentEvent.title}</h5>
                        {gameDataStore.currentEvent.getBody(gameDataStore).map((line) =>
                            <p>{line}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;