import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';
import SubCategory from "./SubCategory";
import WhatToDo from "./WhatToDo";

@observer
class MainContainer extends React.Component {
    renderProperView = () => {
        let dataStore = this.props.dataStore;
        if(dataStore.view !== dataStore.VIEW_WHAT_TO_DO) {
            const data = dataStore.dataForCurrentView;
            return _.map(data, (items, category) => {
                return <SubCategory category={category}
                                    items={items}
                                    dataStore={dataStore}
                                    key={category} />
            });
        } else {
            return <WhatToDo dataStore={dataStore}/>;
        }
    };

    render = () => {
        return (
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row">
                        {this.renderProperView()}
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;