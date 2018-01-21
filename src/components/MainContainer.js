import React from 'react';
import {observer} from "mobx-react";

@observer
class MainContainer extends React.Component {
    render = () => {
        const gameDataStore = this.props.gameDataStore;

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="game-container">
                        <h5>{gameDataStore.currentEvent.title}</h5>
                        <div>{gameDataStore.currentEvent.getBody(gameDataStore)}</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;