import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';
import SubCategory from "./SubCategory";

@observer
class MainContainer extends React.Component {
    renderProperView = (dataStore) => {
        if(dataStore.view !== dataStore.VIEW_WHAT_TO_DO) {
            const data = dataStore.dataFiltered;
            return _.map(data, (items, category) => {
                return <SubCategory category={category}
                                    items={items}
                                    dataStore={dataStore} />
            });
        } else {
            return [];
        }
    };

    render = () => {
        let dataStore = this.props.dataStore;

        return (
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        {this.renderProperView(dataStore)}
                    </div>
                </div>
            </div>
        );
    };
}

export default MainContainer;