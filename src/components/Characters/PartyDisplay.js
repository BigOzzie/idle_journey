import React from 'react';
import {observer} from "mobx-react";
import StatBlock from "./StatBlock";

const PartyDisplay = observer((props) =>
    <div className="row">
        <div className="col-sm-12">
            <div className="party-display">
                {props.party.members.map((character, i) =>
                    <StatBlock key={i} character={character}/>
                )}
            </div>
        </div>
    </div>);

export default PartyDisplay;