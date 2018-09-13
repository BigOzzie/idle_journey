import React from 'react';
import {observer} from "mobx-react";
import _ from 'lodash';
import Item from "./Item";

@observer
class SubCategory extends React.Component {
    prettifyCategory = () => {
        const category = this.props.category;
        return category.replace(new RegExp("_", 'g'), " ").replace("category", "").toUpperCase();

    };

    renderChunk = (chunk) => {
        return _.map(chunk, (item) => {
            return <Item key={item.id} item={item} dataStore={this.props.dataStore}/>;
        });
    };

    getNumberOfColumns = () => {
        const items_condensed = this.getItemsCondensed();
        return Math.ceil(items_condensed.length/5);
    };

    getItemsCondensed = () => {
        return this.props.items.filter((el) => {
            return !el.parent;
        });
    };

    render = () => {
        const num_columns = this.getNumberOfColumns();
        const large_col = Math.min(2*num_columns,12);
        const md_col = num_columns > 2 ? 12 : 6;

        const category = this.prettifyCategory();

        const items_condensed = this.getItemsCondensed();
        const item_chunks = _.chunk(items_condensed, 5);
        const chunk_col = Math.floor(12/(item_chunks.length));

        return (
            <div className={"col-lg-"+large_col+" col-md-"+md_col} style={{"marginBottom": "1em"}}>
                <div className="card">
                    <div className="card-header">
                        {category}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {_.map(item_chunks, (chunk) => {
                                return <div className={"col-"+chunk_col}>
                                    <ul className="list-group list-group-flush">
                                        {this.renderChunk(chunk)}
                                    </ul>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default SubCategory;