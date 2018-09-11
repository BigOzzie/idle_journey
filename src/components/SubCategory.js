import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';

@observer
class SubCategory extends React.Component {
    prettifyCategory = () => {
        const category = this.props.category;
        return category.replace(new RegExp("_", 'g'), " ").replace("category", "").toUpperCase();

    };

    renderItems = () => {
        let items = this.props.items;
        return _.map(items, (item) => {
            if(!item.parent) {
                return <li className="list-group-item">{item.display_name}</li>;
            }
        });
    };

    render = () => {
        const category = this.prettifyCategory();

        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{category}</h5>
                        <ul className="list-group list-group-flush">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default SubCategory;