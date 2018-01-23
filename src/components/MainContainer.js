import React from 'react';
import {observer} from "mobx-react";
import {Button} from "react-bootstrap";

@observer
class MainContainer extends React.Component {
    render = () => {
        const gameDataStore = this.props.gameDataStore;
        const event = gameDataStore.currentEvent;

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="game-container">
                        <h5>{event.title}</h5>
                        {event.getBody(gameDataStore).map((line, i) =>
                            <p key={i}>{line}</p>
                        )}
                        {event.eventOptions.map((option, i) =>
                            <Button key={i} onClick={() => {gameDataStore.handleOptionClick(i)}}>{option.text}</Button>
                        )}
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;