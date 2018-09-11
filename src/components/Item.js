import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash/core';

@observer
class Item extends React.Component {
    handleSelectChange = (event) => {
        let options = event.target.options;
        options = _.map(options, (option) => {
            return option.value;
        });
        const value = event.target.value;
        this.props.dataStore.setAllOwnedThroughItemId(options, value);
    };

    renderItem = () => {
        const item = this.props.item;
        const dataStore = this.props.dataStore;

        let children = dataStore.findChildren(item.id);

        if(children.length === 0) {
            return <div style={{"paddingLeft": "0.5em"}}>
                <input type="checkbox" className="form-check-input" id={item.id} checked={!!item.owned} onChange={() => { dataStore.toggleItemOwned(item.id);}}/>
                <label className="form-check-label" htmlFor={item.id}>{item.display_name}</label>
            </div>;
        } else {
            children = [item].concat(children);
            let default_value = -1;
            let options = [
                <option key={-1} value={-1}>None</option>,
            ];
            _.each(children, (child) => {
                if(child.owned) {
                    default_value = child.id;
                }
                options.push(<option key={child.id} value={child.id}>{child.display_name}</option>);
            });

            return <select id={item.id} onChange={this.handleSelectChange} defaultValue={default_value}>{options}</select>;
        }
    };

    render = () => {
        return (
            <li className="list-group-item">
                {this.renderItem()}
            </li>
        );
    };
}

export default Item;