import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash';

@observer
class WhatToDo extends React.Component {
    render = () => {
        const dataStore = this.props.dataStore;

        const unattained = dataStore.meetPrereqs;
        const partitioned = _.partition(unattained, (el) => {return !el.optional;});

        return (
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">REQUIRED</h5>
                                <ul className="list-group list-group-flush">
                                    {_.map(partitioned[0], (el) => {
                                        return  <li className="list-group-item" style={{"cursor":"pointer"}} key={el.id} onClick={() => { dataStore.toggleItemOwned(el.id);}}>
                                            {el.description.vague}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">OPTIONAL</h5>
                                <ul className="list-group list-group-flush">
                                    {_.map(partitioned[1], (el) => {
                                        return  <li className="list-group-item" style={{"cursor":"pointer"}} key={el.id} onClick={() => { dataStore.toggleItemOwned(el.id);}}>
                                            {el.description.vague}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default WhatToDo;