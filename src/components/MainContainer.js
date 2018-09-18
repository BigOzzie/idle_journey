import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';
import SubCategory from "./SubCategory";
import WhatToDo from "./WhatToDo";
import Options from "./Options";

@observer
class MainContainer extends React.Component {
    renderProperView = () => {
        let dataStore = this.props.dataStore;
        switch(dataStore.view) {
            case dataStore.VIEW_INVENTORY:
            case dataStore.VIEW_ACCOMPLISHMENTS:
                const data = dataStore.dataForCurrentView;
                return _.map(data, (items, category) => {
                    return <SubCategory category={category}
                                        items={items}
                                        dataStore={dataStore}
                                        key={category} />
                });
            case dataStore.VIEW_WHAT_TO_DO:
                return <WhatToDo dataStore={dataStore}/>;
            case dataStore.VIEW_OPTIONS:
            default:
                return <Options dataStore={dataStore}/>;
        }
    };

    render = () => {
        return (
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row" style={{padding: "0em 1em"}}>
                        {this.renderProperView()}
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;