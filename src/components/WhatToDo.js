import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';
import Item from "./Item";

@observer
class WhatToDo extends React.Component {
    render = () => {
        const unattained = this.props.dataStore.meetPrereqs;
        const required = _.filter(unattained, (el) => {return !el.optional;});
        const optional = _.filter(unattained, (el) => {return !!el.optional;});

        return (
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">REQUIRED</h5>
                                <ul className="list-group list-group-flush">
                                    {_.map(required, (el) => {
                                        return  <li className="list-group-item" key={el.id}>
                                            {el.description.vague}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">OPTIONAL</h5>
                                <ul className="list-group list-group-flush">
                                    {_.map(optional, (el) => {
                                        return  <li className="list-group-item" key={el.id}>
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