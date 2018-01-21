import React from 'react';
import {observer} from "mobx-react";

const StatBlock = observer((props) =>
    <div className="row">
        <div className="col-sm-12">
            <div className="game-container">
                {props.character.name}
            </div>
        </div>
    </div>);

export default StatBlock;